export const activeNav = {
    data() {
        return {
            
        };
    },
    methods: {
        moveActive(){
          let i = this;
          console.log('moveActive');
          setTimeout(function(){
              i.move()
          }, 100);
        },
        move(){
            const li = document.querySelectorAll("nav ul li");
            const li2 = [...this.$store.getters.get_li];
            li2.forEach((element, index) => {
                if(("/"+element.name) == this.$route.path){
                    li[index].className = '';
                    li[index].className = 'active';
                }
                else{
                    li[index].className = '';
                    li[index].className = 'li';
                }
            })
        }
      },
  }
  