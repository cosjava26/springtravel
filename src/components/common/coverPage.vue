<template>
    <div class="coverpage_wrap">
        <div class="logosloganwrap">
            <img src="../../assets/images/coverpage/logo.png" class="logopic img-fluid">
            <img src="../../assets/images/coverpage/slogan.png" class="sloganpic img-fluid">
        </div>
        <div class="people">
            <img src="../../assets/images/coverpage/people.png" class="peoplepic img-fluid">
        </div>
        <div class="percentnumber">
            <div class="animated yt-loader"></div>
            <div class="dotline"></div>
            <!-- <span class="number">10</span> % -->
        </div>
    </div>
</template>

<script>
export default {
    created() {
        
    },
}
</script>
<style lang="scss" scope>
.coverpage_wrap{
    background: #fec485;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    .logosloganwrap{
        padding-top: 194px;
    }
    .logopic{
        display: block;
        margin: 0 auto;
        padding: 0 0 40px 0;
    }
    .sloganpic{
        display: block;
        margin: 0 auto;
        padding: 0 0 91px 0;
    }
    .people{
        padding-bottom: 73px;
    }
    .peoplepic{
        display: block;
        margin: 0 auto;
    }
    .percentnumber{
        color: #f69044;
        font-size: 29px;
        text-align: center;
    }
}

.dotline{
    border-top: 2px dotted;
    bottom: 21%;
    height: 2px;
    position: fixed;
    width: 100%;
    z-index: 9998;
}

// css animation start
.animated {
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

.yt-loader {
    -webkit-animation-name: horizontalProgressBar;
    animation-name: horizontalProgressBar;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    background: url(../../assets/images/coverpage/mrt.png);
    background-repeat: no-repeat;
    height: 43px;
    left: 0;
    position: fixed;
    bottom: 20%;
    width: 542px;
    z-index: 9999;
}

@keyframes horizontalProgressBar
{
    0%   {left: -542px;}
    100% {left:100%;}
}

@-webkit-keyframes horizontalProgressBar /* Safari and Chrome */
{
    0%   {left: -542px;}
    100% {left:100%;}
}
// css animation end

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
    .coverpage_wrap{
        .logosloganwrap, .people{
            max-width: 300px;
            margin: 0 auto;
        }
        .logosloganwrap{
            padding-top: 80px;
        }
        .sloganpic{
            padding-bottom: 60px;
        }
        .logosloganwrap img, .people img{
            max-width: 80%;
        }
        .people{
            padding-bottom: 50px;
        }
    }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
    .coverpage_wrap{
        .logosloganwrap, .people{
            max-width: 350px;
            margin: 0 auto;
        }
        .logosloganwrap{
            padding-top: 80px;
        }
        .sloganpic{
            padding-bottom: 60px;
        }
        .logosloganwrap img, .people img{
            max-width: 80%;
        }
        .people{
            padding-bottom: 50px;
        }
    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
    .coverpage_wrap{
        .logosloganwrap, .people{
            max-width: 400px;
            margin: 0 auto;
        }
        .logosloganwrap{
            padding-top: 80px;
        }
        .sloganpic{
            padding-bottom: 60px;
        }
        .logosloganwrap img, .people img{
            max-width: 80%;
        }
        .people{
            padding-bottom: 50px;
        }
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
    .coverpage_wrap{
        .logosloganwrap, .people{
            max-width: 400px;
            margin: 0 auto;
        }
        .logosloganwrap{
            padding-top: 80px;
        }
        .sloganpic{
            padding-bottom: 60px;
        }
        .logosloganwrap img, .people img{
            max-width: 80%;
        }
        .people{
            padding-bottom: 50px;
        }
    }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) and (max-width: 1599.98px)  {
    .coverpage_wrap{
        .logosloganwrap, .people{
            max-width: 500px;
            margin: 0 auto;
        }
        .logosloganwrap{
            padding-top: 80px;
        }
        .sloganpic{
            padding-bottom: 60px;
        }
        .logosloganwrap img, .people img{
            max-width: 80%;
        }
        .people{
            padding-bottom: 50px;
        }
    }
}
</style>
