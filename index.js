




function stars() {
    const count = 300;
    const stars = document.getElementById('stars');
    var i = 0;
    while(i < count) {
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth)
      const y = Math.floor(Math.random() * window.innerHeight)
      const size = Math.random() * 5;
      star.style.left = x+'px';
      star.style.top = y+'px';
      star.style.height = 1+size+'px';
      star.style.width = 1+size+'px';
      const duration = Math.random() * 2;
      star.style.animationDuration = 2+duration+'s';
      stars.appendChild(star);
      i++
    }
    mainPage();
  }
stars();


  function mainPage(){
    var pageTitle = document.title;
      if(pageTitle === ("Rodrick Artistic Design")) {
      PageReady();
    }else{

    }
  }
  function PageReady() {
    $(".maintextI h1").hide();
    $(".maintextI h1").removeClass("hide");
    $(".maintextI h1").css("font-size", "1rem");
    $(".maintextI h1").css("color", "white");
    setTimeout(() => {
      $(".maintextI h1").fadeIn();
      setTimeout(() => {
        $(".maintextI h1").fadeOut();
        setTimeout(() => {
          $(".maintextI h1").addClass("hide");
          $(".maintextI h1").css("font-size", "3rem");
          $(".maintextI h1").removeClass("hide");
          $(".maintextI h1").fadeIn();
          setTimeout(() => {
            $(".maintextI h1").fadeOut();
            setTimeout(() => {
              $(".maintextI h1").addClass("hide");
              $(".maintextI h1").css("font-size", "6rem");
              $(".maintextI h1").removeClass("hide");
              $(".maintextI h1").fadeIn();
              setTimeout(() => {
                $("span").removeClass("twinkle");
                setTimeout(() => {
                  $("span").addClass("twinkle");
                  setTimeout(() => {
                    $("span").removeClass("twinkle");
                    setTimeout(() => {
                      $("span").addClass("twinkle");
                      setTimeout(() => {
                        $("span").removeClass("twinkle");
                        setTimeout(() => {
                          $(".maintextI h5").hide();
                          $(".maintextI h5").css("color", "white");
                          $(".maintextI h5").removeClass("hide");
                          $(".maintextI h5").fadeIn();
                          setTimeout(() => {
                            $("header").removeClass("hide");
                          }, 500) 
                        }, 500)  
                      }, 500)    
                    }, 500)    
                  }, 500) 
                }, 500)  
              }, 500)
            }, 1000)  
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }
  