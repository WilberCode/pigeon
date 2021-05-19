$(function () {
	var initial_year = $('[data-news-select-submit][name="year"]').val();
	let currentYear = "";
	let defaultYear = false;
	let datalist = [];
	let yearArr = [];
	let backnumberSelectHtml = "";
	const urlParam = FUNC.getUrlVars();

	let currentCategory = "";

	var now = new Date();
	var initial_year = now.getFullYear();;



	if( urlParam.year_filter != undefined ){
		currentYear = urlParam.year_filter;
		defaultYear = true;
	}


	if( urlParam.category_filter != undefined ){
		currentCategory = urlParam.category_filter;
	}

	$('[data-fs]').flexibleSearch({
		searchDataPath: $("[data-fs-path]").data('fs-path'),
		searchDataPathPreload: null,
		resultMetaTitleRewrite:false,
		cache:  false,
		searchFormCreation: false,
		loadingImgPath: "",
		loadingImgHTML: null,
		resultBlockId: "fs-result",
		resultItemTmpl: $("[data-fs-tmpl-result]").html(),
		resultMsgId:null,
		resultMsgTmpl: $("[data-fs-tmpl-msg]").html(),
		hidePageNumber:false,
		paginateId: null,
		paginateClassName: "m-box-pager",
		paginateTmpl: $("[data-tmpl-fs-pager]").html(),
		limit: 20, //1ページあたりの表示件数
		// initialParameter: 'offset=0&sortOrder=ascend&category=&year=' + initial_year,
		initialParameter: 'offset=0',
		// Paginate
		paginateCount: 1,
		showTurnPage: true,
		prevPageText: 'Prev',
		nextPageText: 'Next',
		maxPageCount: 999999,
		customSearch: function(item, paramObj){
			let result = false;
			let categoryArr = item.category.split('//');

			if( currentCategory != "" ){
				if( $.inArray(  currentCategory , categoryArr)  != -1   ){
					if( defaultYear == false ){

						if( currentYear == ""){
							currentYear = item.year;
						}else{
							if( currentYear < item.year ){
								currentYear = item.year;
							}

						}

					}
				}
			}else{
				if( defaultYear == false ){

					if( currentYear == ""){
						currentYear = item.year;
					}else{
						if( currentYear < item.year ){
							currentYear = item.year;
						}

					}

				}

			}

			if( currentCategory != "" ){
				if( $.inArray(  currentCategory , categoryArr)  != -1   ){
					if( item.date.indexOf(currentYear) > -1){
						result = true;
					}
				}
			}else{
				if( item.date.indexOf(currentYear) > -1){
					result = true;
				}

			}
			datalist.push(item);

			return result;
		},
		modifyResultJSON: function(resultJSON){

			return resultJSON;
		},
		resultComplete: function(totalResults){

			let backnumberSelectHtml = "";

			if( urlParam.category_filter != undefined ){
				$('[name="category_filter"][value="' + urlParam.category_filter + '"]').addClass('is-current');
			}else{
				$('[name="category_filter"][value=""]').addClass('is-current');
			}

			//独自ページャーの実装
			if( $('.m-box-pager .pager-data').find('.list-item').length < 2){
				$('.m-box-pager').hide();
			}else{
				//カレントページの設定
				$('[data-news-offset-change]').val( $('.m-box-pager').find('.fs-current-link').data('news-offset') );

				//selectによるページ遷移
				$('[data-news-offset-change]').on('change',function(e){
					$this = $(this);

					$('.m-box-pager').find('[data-news-offset=' + $this.val() + ']').trigger('click');

				});

				//全体ページ数の記載
				$('[data-news-total]').text($('.m-box-pager .pager-data .list-item:last-child .item-btn').data('news-offset'));
			}


			//不要なinputタグを削除
			if( SETTING.DEVICE != 'pc'){
				$('[data-fs] .item-sp-hidden').remove();

			}else{
				$('[data-fs] .item-pc-hidden').remove();

			}

			//記事が無い場合
			if( $('#fs-result').find(".m-list-news").find("li").length == 0 ){

				if( $('html').prop('lang') == "es") {
					$('#fs-result').prepend('<p class="m-txt-p">Sorry, there is no related news available.</p>')
				}else{

					$('#fs-result').prepend('<p class="m-txt-p">No hay noticias aplicables</p>')
				}
			}




			//年別プルダウンの表示
			var $resultInfoObj = $('#fs-result-info');
			datalist.forEach(function( item ) {

				let categoryArr = item.category.split('//');

				if( currentCategory != "" ){
					if( $.inArray(  currentCategory , categoryArr)  != -1   ){
						let tempYear = '';
						tempYear = item.date.replace(/(\d{4}).*/, '$1');
						// if( $('html').prop('lang') == "en") {
						// 	tempYear = item.date.replace(/.*(\d{4})$/, '$1');
						// }else{
						// 	tempYear = item.date.replace(/(\d{4}).*/, '$1');
						// }

						if( yearArr.indexOf(tempYear) == -1 ){
							yearArr.push(tempYear);
						}
					}
				}else{
					let tempYear = '';
					tempYear = item.date.replace(/(\d{4}).*/, '$1');

					if( yearArr.indexOf(tempYear) == -1 ){
						yearArr.push(tempYear);
					}

				}
			});

			backnumberSelectHtml = Mustache.to_html( $("[data-fs-tmpl-backnumber]").html(), {
				param:yearArr
			});

			$resultInfoObj.html(backnumberSelectHtml);
			$resultInfoObj.find('option[value="' + currentYear + '"]').attr('selected','selected');


			//年のプルダウンが無い場合
			if( yearArr.length == 0 ){
				if( $('html').prop('lang') == "en") {
					$('[data-news-select-submit="year"]').prepend('<option value="' + initial_year + '">' + initial_year + '</option>')
				}else{
					$('[data-news-select-submit="year"]').prepend('<option value="' + initial_year + '">' + initial_year + '</option>')

				}
			}
			//selectタグによるサブミットを実行
			$('[data-news-select-submit]').on('change',function(e){
				$this = $(this);
				if( urlParam.category_filter != undefined ){
					$('[data-category-hidden]').attr('name','category_filter').val(urlParam.category_filter);
				}

				if( $this.data('news-select-submit') == "year"){
					$('[data-news-select-submit]').attr('name','year_filter');
				}

				$this.parents('form').submit();
			});



			return;
		},
		dummy: false
	});
});