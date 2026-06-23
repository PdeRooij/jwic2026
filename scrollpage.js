import ScrollPage from "https://esm.sh/scrollpage-js@0.1.5";

const scrollPage = new ScrollPage("#main-page",{
    menu:"ul.side-nav",
    animation:"easeOutBack",
    time:1000,
    pages:{
        1:{
            animation:"easeInQuart",
            time:700
        },
    }
});


//event
scrollPage.onScroll(function(e){
    console.log("Leaving from : "+e.currentPageName);//only fire if you keep scroll your mouse wheel
    console.log("Scroll to : "+e.nextPageName);
});

scrollPage.onMove(function(e){
    console.log("Move to : "+e.nextPageName);//will be fired every frame along with the animation (both moving with menu or mouse wheel)
});

scrollPage.onStart(function(e){
    console.log("The previous page was : "+e.currentPageName);
    console.log("The next page is : "+e.nextPageName);
});

scrollPage.onFinish(function(e){
    console.log("Arrived at : "+e.currentPageName); //will be have same value as next page because is already arrived/finish
    console.log("Done Go to : "+e.nextPageName);
});

scrollPage.on('page3',function(e){
    console.log("Event 1 on : "+e.currentPageName); //will be have same value as next page
    console.log("Event 2 on : "+e.nextPageName);
});
