let projectDetail = [
    {
        projectId: 'pro01',
        projeHoverId: 'hover01',
        projectName: 'Movie Maniax', 
        projectDesc: 'Movie Maniax is a user-friendly movie search application built on MERN stack. Users are offered a range of search options such as Popular, Top-Rated, Upcoming, and Genre. Once a member of Movie Maniax, users unlock a variety of rich features such as add to watchlist/favourites, build custom tags to make accessibility of movies easier, and read/write reviews/comments. Furthermore, to include a socializing aspect to our application, we allow users to make new friends with other Movie Maniax members. Once the user has made a Movie Maniax buddy, they can check out their friends and follower profile pages and get a glimpse of their favourite movies, watch lists, and reviews.',
        projectImg: 'assets/movieManiaxpPre.png', 
        projectLink: 'https://movie-app123.herokuapp.com/',
        projectGitHub: 'https://github.com/jsanthos01/MovieManiax'
    },
    {
        projectId: 'pro2', 
        projeHoverId: 'hover2',
        projectName: 'Fitness Diaries', 
        projectDesc: `Fitness Diaries is a full-stack web application that uses MVC design pattern with local server-side API. The application is designed for people who are conscious about their health and follow a fitness regime or lose weight with a socializing aspect. The app addresses the need of having some friends around who can motivate and cheer you up in your fitness journey instead of a showcasing a plain list of exercises and diet plans. It's concise compared to social networking channels and broader than chat applications.`,
        projectImg: 'assets/fitnessDiariesPre.png', 
        projectLink: 'https://fitness-diaries.herokuapp.com/',
        projectGitHub: 'https://github.com/jsanthos01/Fitness-Diaries'
    },
    {
        projectId: 'pro3', 
        projeHoverId: 'hover3',
        projectName: 'Google Books Search', 
        projectDesc: `Google books is a MERN stack application that allows users to search books. This application was built using React components, working with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Node, Express and MongoDB was used so that users can save books to review or purchase later.`,
        projectImg: 'assets/googleBooksPre.jpg', 
        projectLink: 'https://googlebooksbt2020.herokuapp.com/',
        projectGitHub: 'https://github.com/SaraMunir/googlebooks'
    },
    {
        projectId: 'pro5', 
        projeHoverId: 'hover5',
        projectName: 'Weather Dashboard', 
        projectDesc: 'This weather app allows users to search for a city with current and future weather conditions for that city. Users are able to add to the search history and also retrive the data when they visit the app again. The user can delete the cities from the search history',
        projectImg: 'assets/weatherApp.jpg', 
        projectLink: 'https://saramunir.github.io/Weather-Dashboard/',
        projectGitHub: 'https://github.com/SaraMunir/Weather-Dashboard'
    }
    
]
$(document).ready(function(){
    // $(window).scroll(function() {
    // var scroll = $(window).scrollTop();
    // $(".hero").css({
    //     transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/100)/100+')'
    // });
    // });
//=================FOR nav
    $( ".menuBar" ).hide() 
    $( "#hider" ).mouseover(function() {
        $( ".menuBar" ).show( 1500 );
        $( "#hider" ).hide( 500 );
        return;
    });
    $( ".menuBarUL" ).mouseleave(function() {
        $( ".menuBar" ).hide( 1500 );
        $( "#hider" ).show( 1500 );
    });
    // ====for project hover
    $( "#proj1" ).mouseover(function() {
        $( "#proj1Detl" ).fadeIn( 500 );
        // $( "#hider" ).hide( 500 );
        return;
    });
    $( "#proj1" ).mouseleave(function() {
        $( "#proj1Detl" ).fadeOut( 200 );
        // $( "#hider" ).hide( 500 );
        return;
    });
    ShowProjects()
    //=================FOR H1 ANIMATION
// heroIntroAnimation()
// function heroAnimation(){
    
//         // $(".heroText2").fadeIn('slow');
//         $(".heroText2").animate({
//             left: '50%',
//         }, 2500);
//         // $(".heroText1").fadeIn('slow');
//         $(".heroText1").animate({
//             right: '50%',
//             // fontSize: '73px'
//         }, 2500);
//         return;
// //     }
//     // setTimeout(heroAnimation, 800);
//     setTimeout(subHeroAnimation, 2800);
//     setTimeout(readAboutMeAnimation, 3800);
function heroIntroAnimation(){
    $( ".intro" ).slideDown( 1500 );
        return;
    }
function subHeroAnimation(){
    $( ".subHero" ).slideDown( 1500 );
        return;
    }
function readAboutMeAnimation(){
    $( ".readAbtMeBtn" ).show( 1500 );
        return;
    }
    
    
    //========dont delete below
});
function ShowStack(){
    // console.log("onlcick works?")
    // $( "#devStacks" ).show(  );
    $('html, body').animate({
        scrollTop: $("#devStacks").offset().top
    }, 1500);
}
function scrolAbout(){
    
    $( ".someme" ).show(  );
    $('html, body').animate({
        scrollTop: $(".aboutMe").offset().top
        }, 1500);
};

// function ShowProjectArray(){

// }
function showProj1Detail(projId){ 
    console.log('is the button working', projId)
    $( ".projWindow" ).removeClass( "hide" );
    $('html, body').animate({
        scrollTop: $(".projWindow").offset().top
        }, 600);
    $("#pro1").html(``);
    // console.log(projectDetail);
    projectDetail.forEach(project => {
        if (project.projectId == projId){
            console.log(project.projectName);
            $("#pro1").html(`
            <img src= "${project.projectImg}" alt="ss" class="col-lg-6"" >
            <div class="details1 col-lg-6 text-center">
                <h1 class="coralFont">${project.projectName}</h1>
                <p>${project.projectDesc}</p>
                <div class="d-flex justify-content-center mx-auto" style="width: 70%;">
                    <a href="${project.projectLink}" class="button2" style="width: 150px;">Live Demo</a>
                    <a href="${project.projectGitHub}" class="button2" style="width: 150px;">Git Hub</a>
                </div>
            </div>
            
            `)
        }  else {
            return    
        }
    }
        
    )
}
function closeProjWnd(){
    $( ".projWindow" ).addClass( "hide" )
}
function ShowContacts(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
        }, 1500);
}

async function ShowProjects(){
    await projectDetail.forEach(projects => {
        console.log(projects.projectName)
        $( "#projectsSection").append(`
        <div class="projectBox proj1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50" id=${projects.projectId}>
            <img class="projImg" src=${projects.projectImg} alt="">
            <div class="projSumm hide" id='${projects.projeHoverId}'>
                <h3 class=" text-center">${projects.projectName}</h3>
                <div class="myBtnMgn button2 btnWdth2" onClick="showProj1Detail('${projects.projectId}')">Show Detail</div>
            </div> 
        </div>
        `);

        $( `#${projects.projectId}` ).mouseover(function() {
            console.log(projects.projeHoverId)
            $( `#${projects.projeHoverId}` ).fadeIn( 500 );
            return;
        });

        $( `#${projects.projectId}` ).mouseleave(function() {
            $( `#${projects.projeHoverId}` ).fadeOut( 200 );
            return;
        });

    })

}

function NextProject(){
    $( "#weatherBoard" ).hide( 1500 );
    $( "#myCookbook" ).show( 1500 );
    // $('html, body').animate({
    //     scrollTop: $("#devStacks").offset().top
    //     }, 1500);
    $( "#buttonsArea").html('<div class="button2" style="width: 150px;" onClick="PrevProject()">Prev Project</div>')
}
function PrevProject(){
    $( "#weatherBoard" ).show( 1500 );
    $( "#myCookbook" ).hide( 1500 );
    // $('html, body').animate({
    //     scrollTop: $("#devStacks").offset().top
    //     }, 1500);
    $( "#buttonsArea").html('<div class="button2" style="width: 150px;" onClick="NextProject()">Next Project</div>')
}

function ScrollToProjects(){
    $('html, body').animate({
        scrollTop: $("#devProjects").offset().top
        }, 1500);

}


$(".boxTest").scroll(function() {
    alert('box test reached')
    
});
        