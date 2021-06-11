async function get(){

    var response = await fetch("https://forkify-api.herokuapp.com/api/search?&q=pizza");
    var data = await response.json();
    
    
    document.querySelector(".test img").src = data.recipes[0].image_url;
    document.querySelector(".test h2").innerHTML = data.recipes[0].title;
    document.querySelector(".test h4").innerHTML = data.recipes[0].publisher;
    document.querySelector(".test a").innerHTML = "Read details";

    
    document.querySelector(".test2 img").src = data.recipes[1].image_url;
    document.querySelector(".test2 h2").innerHTML = data.recipes[1].title;
    document.querySelector(".test2 h4").innerHTML = data.recipes[1].publisher;
    document.querySelector(".test2 a").innerHTML = "Read details";

    document.querySelector(".test3 img").src = data.recipes[2].image_url;
    document.querySelector(".test3 h2").innerHTML = data.recipes[2].title;
    document.querySelector(".test3 h4").innerHTML = data.recipes[2].publisher;
    document.querySelector(".test3 a").innerHTML = "Read details";
    
    document.querySelector(".test4 img").src = data.recipes[3].image_url;
    document.querySelector(".test4 h2").innerHTML = data.recipes[3].title;
    document.querySelector(".test4 h4").innerHTML = data.recipes[3].publisher;
    document.querySelector(".test4 a").innerHTML = "Read details";

    document.querySelector(".test5 img").src = data.recipes[4].image_url;
    document.querySelector(".test5 h2").innerHTML = data.recipes[4].title;
    document.querySelector(".test5 h4").innerHTML = data.recipes[4].publisher;
    document.querySelector(".test5 a").innerHTML = "Read details";

    document.querySelector(".test6 img").src = data.recipes[5].image_url;
    document.querySelector(".test6 h2").innerHTML = data.recipes[5].title;
    document.querySelector(".test6 h4").innerHTML = data.recipes[5].publisher;
    document.querySelector(".test6 a").innerHTML = "Read details";

    document.querySelector(".test7 img").src = data.recipes[6].image_url;
    document.querySelector(".test7 h2").innerHTML = data.recipes[6].title;
    document.querySelector(".test7 h4").innerHTML = data.recipes[6].publisher;
    document.querySelector(".test7 a").innerHTML = "Read details";
    
    document.querySelector(".test8 img").src = data.recipes[7].image_url;
    document.querySelector(".test8 h2").innerHTML = data.recipes[7].title;
    document.querySelector(".test8 h4").innerHTML = data.recipes[7].publisher;
    document.querySelector(".test8 a").innerHTML = "Read details";

    document.querySelector(".test9 img").src = data.recipes[8].image_url;
    document.querySelector(".test9 h2").innerHTML = data.recipes[8].title;
    document.querySelector(".test9 h4").innerHTML = data.recipes[8].publisher;
    document.querySelector(".test9 a").innerHTML = "Read details";
    
    document.querySelector(".test10 img").src = data.recipes[9].image_url;
    document.querySelector(".test10 h2").innerHTML = data.recipes[9].title;
    document.querySelector(".test10 h4").innerHTML = data.recipes[9].publisher;
    document.querySelector(".test10 a").innerHTML = "Read details";

    document.querySelector(".test11 img").src = data.recipes[10].image_url;
    document.querySelector(".test11 h2").innerHTML = data.recipes[10].title;
    document.querySelector(".test11 h4").innerHTML = data.recipes[10].publisher;
    document.querySelector(".test11 a").innerHTML = "Read details";
    
    document.querySelector(".test12 img").src = data.recipes[11].image_url;
    document.querySelector(".test12 h2").innerHTML = data.recipes[11].title;
    document.querySelector(".test12 h4").innerHTML = data.recipes[11].publisher;
    document.querySelector(".test12 a").innerHTML = "Read details";

    document.querySelector(".test13 img").src = data.recipes[12].image_url;
    document.querySelector(".test13 h2").innerHTML = data.recipes[12].title;
    document.querySelector(".test13 h4").innerHTML = data.recipes[12].publisher;
    document.querySelector(".test13 a").innerHTML = "Read details";
    
    document.querySelector(".test14 img").src = data.recipes[13].image_url;
    document.querySelector(".test14 h2").innerHTML = data.recipes[13].title;
    document.querySelector(".test14 h4").innerHTML = data.recipes[13].publisher;
    document.querySelector(".test14 a").innerHTML = "Read details";

    document.querySelector(".test15 img").src = data.recipes[14].image_url;
    document.querySelector(".test15 h2").innerHTML = data.recipes[14].title;
    document.querySelector(".test15 h4").innerHTML = data.recipes[14].publisher;
    document.querySelector(".test15 a").innerHTML = "Read details";
    
    document.querySelector(".test16 img").src = data.recipes[15].image_url;
    document.querySelector(".test16 h2").innerHTML = data.recipes[15].title;
    document.querySelector(".test16 h4").innerHTML = data.recipes[15].publisher;
    document.querySelector(".test16 a").innerHTML = "Read details";

    document.querySelector(".test17 img").src = data.recipes[16].image_url;
    document.querySelector(".test17 h2").innerHTML = data.recipes[16].title;
    document.querySelector(".test17 h4").innerHTML = data.recipes[16].publisher;
    document.querySelector(".test17 a").innerHTML = "Read details";
    
    document.querySelector(".test18 img").src = data.recipes[17].image_url;
    document.querySelector(".test18 h2").innerHTML = data.recipes[17].title;
    document.querySelector(".test18 h4").innerHTML = data.recipes[17].publisher;
    document.querySelector(".test18 a").innerHTML = "Read details";

    document.querySelector(".test19 img").src = data.recipes[18].image_url;
    document.querySelector(".test19 h2").innerHTML = data.recipes[18].title;
    document.querySelector(".test19 h4").innerHTML = data.recipes[18].publisher;
    document.querySelector(".test19 a").innerHTML = "Read details";
    
    document.querySelector(".test20 img").src = data.recipes[19].image_url;
    document.querySelector(".test20 h2").innerHTML = data.recipes[19].title;
    document.querySelector(".test20 h4").innerHTML = data.recipes[19].publisher;
    document.querySelector(".test20 a").innerHTML = "Read details";

    document.querySelector(".test21 img").src = data.recipes[20].image_url;
    document.querySelector(".test21 h2").innerHTML = data.recipes[20].title;
    document.querySelector(".test21 h4").innerHTML = data.recipes[20].publisher;
    document.querySelector(".test21 a").innerHTML = "Read details";
    
    document.querySelector(".test22 img").src = data.recipes[21].image_url;
    document.querySelector(".test22 h2").innerHTML = data.recipes[21].title;
    document.querySelector(".test22 h4").innerHTML = data.recipes[21].publisher;
    document.querySelector(".test22 a").innerHTML = "Read details";

    document.querySelector(".test23 img").src = data.recipes[22].image_url;
    document.querySelector(".test23 h2").innerHTML = data.recipes[22].title;
    document.querySelector(".test23 h4").innerHTML = data.recipes[22].publisher;
    document.querySelector(".test23 a").innerHTML = "Read details";
    
    document.querySelector(".test24 img").src = data.recipes[23].image_url;
    document.querySelector(".test24 h2").innerHTML = data.recipes[23].title;
    document.querySelector(".test24 h4").innerHTML = data.recipes[23].publisher;
    document.querySelector(".test24 a").innerHTML = "Read details";

    document.querySelector(".test25 img").src = data.recipes[24].image_url;
    document.querySelector(".test25 h2").innerHTML = data.recipes[24].title;
    document.querySelector(".test25 h4").innerHTML = data.recipes[24].publisher;
    document.querySelector(".test25 a").innerHTML = "Read details";
    
    document.querySelector(".test26 img").src = data.recipes[25].image_url;
    document.querySelector(".test26 h2").innerHTML = data.recipes[25].title;
    document.querySelector(".test26 h4").innerHTML = data.recipes[25].publisher;
    document.querySelector(".test26 a").innerHTML = "Read details";

    document.querySelector(".test27 img").src = data.recipes[26].image_url;
    document.querySelector(".test27 h2").innerHTML = data.recipes[26].title;
    document.querySelector(".test27 h4").innerHTML = data.recipes[26].publisher;
    document.querySelector(".test27 a").innerHTML = "Read details";
    
    document.querySelector(".test28 img").src = data.recipes[27].image_url;
    document.querySelector(".test28 h2").innerHTML = data.recipes[27].title;
    document.querySelector(".test28 h4").innerHTML = data.recipes[27].publisher;
    document.querySelector(".test28 a").innerHTML = "Read details";

}

get();
    