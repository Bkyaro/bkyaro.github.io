const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//eye protection
const switcher = $(".switch > input ");
switcher.addEventListener("click", function () {
  if (this.checked) {
    //day
    $("body").classList.remove("night");
    $("body").classList.add("day");
    $$('.card > h1').forEach((item)=>{
        item.classList.add("ps-main-day")
    })
    $$('.bold').forEach((item)=>{
        item.classList.add("ps-main-day")
    })
    $$('.card > ul > p:not(.bold)').forEach((item)=>{
        item.classList.add("ps-item-day")
    })
    $('.spinner').classList.add('ps-main-day')
  } else {
    //night
    $("body").classList.remove("day");
    $("body").classList.add("night");
    $$('.card > h1').forEach((item)=>{
        item.classList.remove("ps-main-day")
    })
    $$('.bold').forEach((item)=>{
        item.classList.remove("ps-main-day")
    })
    $$('.card > ul > p:not(.bold)').forEach((item)=>{
        item.classList.remove("ps-item-day")
    })
    $('.spinner').classList.remove('ps-main-day')
  }
});

//card lists
const descriptions = [
  {
    title: "1.律动天地",
    main: ["垂直过山车", "超级大摆锤"],
    side: ["弹跳塔", "欢乐摩天轮"],
  },
  {
    title: "2.丛林探险",
    main: ["激流勇进", "星际决战"],
    side: ["飞马家庭过山车", "思维影院", "森林神庙"],
  },
  {
    title: "3.欢乐嘉年华",
    main: ["自由落体"],
    side: ["欢乐跳跳", "摇摆屋", "滑翔飞翼", "霹雳转车", "飞天魔轮"],
  },
  {
    title: "4.动感空间",
    main: ["U型滑板"],
    side: ["飓风飞椅", "碰碰车", "墨西哥草帽", "音乐船"],
  },
  {
    title: "5.尖叫地带",
    main: ["十环过山车", "火箭过山车", "摩托过山车"],
    side: ["龙卷风暴", "急速跳跃"],
  },
];

const CARD_TEMPLATE = ({ title, main, side, index }) => {
    let mainps = "";
    let sideps = "";
    main.forEach((item) => {
      mainps = `${mainps}<p class="bold">${item}</p>`
    });
    side.forEach((item) => {
      sideps = `${sideps}<p >${item}</p>`
    });
  
    return `
      <div class="card" data-index="${index+1}">
          <div class="align">
              <span class="red"></span>
              <span class="yellow"></span>
              <span class="green"></span>
          </div>
  
          <h1>${title}</h1>
          <ul>
              ${mainps}
              ${sideps}
          </ul>
      </div>
    `;
  };

descriptions.forEach((data,index) => {
  $(".lists").insertAdjacentHTML('beforeend',CARD_TEMPLATE({ ...data, index}));
});


//map changing
$$('.card').forEach((cards)=>{
    cards.addEventListener('click',function(e){
        e.stopPropagation();

        let activeIndex = this.dataset.index
        $$('img').forEach((maps)=>{
            maps.classList.add('hide')
            maps.classList.remove('show')
        })
        $(`img[data-id="${activeIndex}"]`).classList.add('show')
    })
})

$('.lists').addEventListener('click',function(e){
    e.stopPropagation();
    $$('img').forEach((maps)=>{
        maps.classList.add('hide')
        maps.classList.remove('show')
    })
    $('#source-map').classList.add('show')
})