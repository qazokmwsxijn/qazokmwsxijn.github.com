$(function() {
    var x=0,y=0;

    var info = {
        0: {
            name: "Lesty",
            sex: "男"
        },

        1: {
            name: "Asdzxcqwe",
            sex: "女"
        },

        2: {
            name: "Zhimeng",
            sex: "女"
        }
    }

    document.addEventListener('keydown', function(e){
        ul.style.webkitTransition='-webkit-transform 0.5s linear';
        switch(e.keyCode){
            case 37:    y -= 90;    
                        break;
            case 38:    x += 90;    
                        break;
            case 39:    y += 90;    
                        break;
            case 40:    x -= 90;    
                        break;
            case 13:    x=0; y=0;    
                        ul.style.webkitTransition='-webkit-transform 0.1s linear';
                        break;
        }
        ul.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg) scaleX(0.7) scaleY(0.7) scaleZ(0.7)"; //变换效果（沿X轴和Y轴旋转）
    }, false);


    $("#ul li").each(function() {
      $(this).hover(function() {
        $(this).children(".asd-album-c").css({opacity: 1});
        $("ul li img").each(function() {
          $(this).removeClass("rotatealbum");
        })
        $(this).children("img").addClass("rotatealbum");
        // $(this).children("img").css({transform: "translate(-50%,-50%) rotate(721deg)"});
        console.log(this.style.webkitTransform);
      }, function() {
         $(this).children(".asd-album-c").css({opacity: 0});
      });
    });

    var len = $("ul li").length;
    for(var i = 0; i < len; i++) {
        var idx = i % (len/2);
        $(".info-name").eq(i).text(info[idx].name);
        $(".info-sex").eq(i).text(info[idx].sex);
    }

});

