<template>
    <header class="header">
        <div class="container header-container">
            <section class="flexContainer row">
                <div class="userLogin">
                    <button class="btn btn-login"> ورود / ثبت نام</button>
                </div>
                <div class="logo">
                    <router-link to="/" href="#" class="logo-img">
                        <img src="../../../../assets/img/Group249.svg" alt="logo" /> 
                    </router-link>
                </div>
            </section>
        </div>
    </header>
</template>

<style lang="scss" scoped>
 @import "../../../../assets/sass/_variable";

.header{
  height: 100px;
  height: 65px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: $white;
  .header-container{
    height: 100%;
  }
  .userLogin{
    .btn-login{
      text-align: center;
      border : 0;
      background-color: $tealish;
      color: white;
      cursor: pointer;
      transition: 0.5s ease all;
      font-family: 'bahij-helvetica-bold';
      &:hover{
        background-color: #25918b;
      }
    }
  }
  .logo{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    img{
      height: auto;
    }
  }
}

@media only screen and (max-width: 500px) {
    .container{
    width: 100%;
  }
  
  .header{
    width: 100%;
    height: 55px;
    .userLogin{
      .btn-login{
        text-align: center;
        width: 90px;
        height: 30px;
        padding:0;
        border-radius: 10px;
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .logo{
      margin-right: 5px;
      img{
        width: 90px;
        height: auto;
      }
    }
  }
}
@media only screen and (min-width: 500px) {
    .container{
    width: 480px;
  }
  .header{
    width: 100%;
    height: 65px;
    .userLogin{
      .btn-login{
        text-align: center;
        width: 110px;
        height: 40px;
        padding:0;
        border-radius: 10px;
        font-size: 13px;
        margin-left: 0px;
      }
    }
    .logo{
      margin-right: 0px;
      img{
        width: 100px;
        height: auto;
      }
    }
  }
}
@media only screen and (min-width: 798px) {
    .container{
    width: 690px;
  }
  
  .header{
    .userLogin{
      .btn-login{
        width: 150px;
        height: 40px;
        padding: 4px auto 6px auto;
        font-size: 15px;
      }
    }
    .logo{
      img{
        width: 124px;
      }
    }
  }
}
@media only screen and (min-width: 992px) {
  .container{
    width: 850px;
  }
}
@media only screen and (min-width: 1200px) {
    .container{
        width: 1000px;
    }
    
    .header{
        .userLogin{
            .btn-login{
                width: 165px;
                padding: 4px 36px 6px;
                font-size: 18px;
            }
        }
    }
}
@media only screen and (min-width: 1400px) {
  .container{
    width: 1140px;
  }
}

</style>