<?php 
 include '../includes/config.php';
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Novedades | Pigeon </title>
    <meta name="description" content="ピジョン株式会社の消費者志向自主宣言のページです。">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Mensaje del Presidente | Pigeon">
    <meta property="og:site_name" content="Pigeon">
    <meta property="og:url" content="/novedades">
    <meta property="og:description" content="ピジョン株式会社の消費者志向自主宣言のページです。">
    <meta property="og:image" content="/assets/images/ogp.png">
    <link rel="stylesheet" href="/assets/css/common.css">
    <link rel="stylesheet" href="/assets/css/app.css">
    <link rel="stylesheet" href="/assets/css/news.css"> 
 </head>

<body id="top" class="is-wave ready ">
    <noscript>JavascriptがOFFのため正しく表示されない可能性があります。</noscript>
    <!-- [ WRAP ] -->
    <div id="l-wrap">
        <!-- [ GLOBAL HEADER ] -->
        <?php include '../includes/header.php' ?>
        <!-- [ /GLOBAL HEADER ] -->

        <!-- [ CONTENT ] -->
        <main id="l-content">
            <div data-fixed-max>
                <div class="m-txt-ttl ttl-img"
                    style="background-image: url(../assets/images/about/p_about_mainv_pc.jpg)">
                    <div data-fixed style="background-image: url(../assets/images/about/p_about_mainv_sp.jpg)">
                        <div class="ttl-inner">
                            <h1 class="ttl-txt">NOVEDADES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <form action="http://pigeonlatam.com/" method="get" class="" data-fs="" data-fs-path="/news/data.json">
                <input type="hidden" name="offset" value="0">
                <input type="hidden" name="" value="" data-category-hidden="">
                <input type="hidden" name="" value="" data-year-hidden="">
                <input type="hidden" name="sortOrder" value="ascend">
                <div class="u-box-filter">
                    <div data-fixed="">
                        <ul class="filter-list">
                            <li class="list-item item-category">
                                <div class="item-inner">
                                    <p class="item-ttl">
                                        Category :
                                    </p>

                                    <div class="item-data item-sp-hidden">
                                        <ul class="data-list">
                                            <li class="list-item">
                                                <button type="submit" name="category_filter" value=""
                                                    class="item-inner is-current">All</button>
                                            </li>
                                            <li class="list-item">
                                                <button type="submit" name="category_filter" value="Company"
                                                    class="item-inner">Company</button>
                                            </li>
                                            <li class="list-item">
                                                <button type="submit" name="category_filter" value="Investors"
                                                    class="item-inner">Investors</button>
                                            </li>
                                            <li class="list-item">
                                                <button type="submit" name="category_filter"
                                                    value="Products &amp; Services" class="item-inner">Products &amp;
                                                    Services</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="list-item item-year">
                                <div class="item-inner">
                                    <p class="item-ttl">
                                        Year :
                                    </p>
                                    <div class="item-select">
                                        <div id="fs-result-info">
                                            <div class="m-form-select">
                                                <select name="" data-news-select-submit="year">
                                                    <option value="2021" selected="selected">2021</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2009">2009</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
            <div class="content-inner" data-fixed="">
                <div id="fs-result">
                    <div class="m-list-news">
                        <ul class="news-list">
                            <li>
                                <a href=""> 
                                    <span class="list-cat"></span>
                                    <div class="list-link">
                                        <div class="link-img">
                                            <img src="/news/assets/images/news-ir.jpg" alt="">
                                        </div>
                                        <div class="link-inner">
                                            <p class="link-date"></p>
                                            <p class="link-ttl"></p>
                                            <p class="link-subtitle"></p>
                                        </div>
                                    </div>
                                </a> 
                            </li>
                        </ul>
                    </div>

                    <div class="m-box-pager" style="display: none;">
                        <div class="pager-num">
                            <div class="num-current">
                                <select class="current-select" data-news-offset-change="">
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div class="num-separator">/</div>
                            <p class="num-total" data-news-total=""></p>
                        </div>
                        <div class="pager-data">
                            <div class="list-item num fs-current"><a
                                    class="item-btn item-page fs-page-link fs-current-link" href="#" title="1"
                                    data-news-offset="1">1</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-pagepath" data-fixed>
                <ul class="m-box-pagepath">
                    <li><a href="/">ホーム</a></li>
                    <li><span>パーツセット</span></li>
                </ul>
            </div>
        </main>
        <!-- [ /CONTENT ] -->

        <!-- [ GLOBAL FOOTER ] -->
        <?php include '../includes/footer.php';?>
        <!-- [ /GLOBAL FOOTER ] -->

        <div class="hide-tab" data-device></div>
        <div class="hide-pc" data-device></div>
    </div>
    <!-- [ WRAP ] -->
    <script src="/assets/js/library.js"></script>
    <script src="/assets/js/setting.js"></script>
    <script src="/assets/js/function.js"></script>
    <script src="/assets/js/common.js"></script>
    <script src="/assets/js/search.js"></script> 
    <script src="/assets/js/unique/news.js"></script>
 

    <script type="template/javascript" data-fs-tmpl-backnumber="">
<div class="m-form-select">
<select name="" data-news-select-submit="year">
{{#param}}
<option value="{{.}}">{{.}}</option>
{{/param}}
</select>
</div>
</script>
	<script type="template/javascript" data-fs-tmpl-result="">
<div class="m-list-news">
<ul class="news-list">
{{#items}}
<li>
{{#permalink}}<a href="{{permalink}}" {{#viewblank}} target="_blank" rel="noopener"{{/viewblank}}>{{/permalink}}
{{^permalink}}<span>{{/permalink}}
{{#category}}<span class="list-cat">{{category}}</span>{{/category}}
<div class="list-link">
{{#thumbnail}}
<div class="link-img">
<img src="{{thumbnail}}" alt="">
</div>
{{/thumbnail}}
<div class="link-inner">
<p class="link-date">{{date}}</p>
<p class="link-ttl">{{&title}}</p>
<p class="link-subtitle">
{{&summary}}
</p>
{{#assetfilesize}}
<p class="link-pdf">({{assetfilesize}})</p>
{{/assetfilesize}}
</div>
</div>
{{#permalink}}</a>{{/permalink}}
{{^permalink}}</span>{{/permalink}}
</li>
{{/items}}
</ul>
</div>
</script>
	<script type="template/javascript" data-tmpl-fs-pager="">
<div class="m-box-pager">
{{#showTurnPage}}
{{#exceptFirst}}
<div class="pager-action btn-prev">
<a href="#" class="action-btn fs-prev-link fs-turn-page-link"><span class="btn-inner">{{prevPageText}}</span></a>
</div>
{{/exceptFirst}}
{{/showTurnPage}}
{{#showTurnPage}}
{{#exceptLast}}
<div class="pager-action btn-next">
<a href="#" class="action-btn fs-next-link fs-turn-page-link"><span class="btn-inner">{{nextPageText}}</span></a>
</div>
{{/exceptLast}}
{{/showTurnPage}}
<div class="pager-num">
<div class="num-current">
<select class="current-select" data-news-offset-change>
{{#page}}
{{#checkRange}}
<option value="{{pageNumber}}">{{pageNumber}}</option>
{{/checkRange}}
{{/page}}
</select>
</div>
<div class="num-separator">/</div>
<p class="num-total" data-news-total></p>
</div>
<div class="pager-data">
{{#page}}
{{#checkRange}}
<div class="list-item num {{current}}"{{#hidePageNumber}} style="display:none;"{{/hidePageNumber}}><a class="item-btn item-page fs-page-link {{currentLink}}" href="#" title="{{pageNumber}}" data-news-offset="{{pageNumber}}">{{pageNumber}}</a></div>
{{/checkRange}}
{{/page}}
</div>
</div>
</script>


<script type="template/javascript" data-fs-tmpl-msg=""></script>


    <!--[if lte IE 9]>
<script src="/assets/js/lib/flexibility/flexibility.js"></script>
<script>
$(function(){
flexibility(document.documentElement);
});
</script>
<![endif]-->

</body>

</html>