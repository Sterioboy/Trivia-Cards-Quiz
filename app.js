
$(document).ready(() =>{
    //Home
    $('#homeBtn').on('click', () => {
        $('.home').fadeOut('fast');
        $('#card0').fadeIn('slow');
    })

    //Card0 - CHNAGE TO ID's
    $('#hint-box-0').on('click', () => {
        $('#hint-0').slideToggle(500)
    })
    
    $('#wrong-answer-one-0').on('click', () => {
        $('#wrong-text-one-0').fadeOut('fast');
        $('#wrongAnswerId-0').show();
    })
    $('#wrong-answer-two-0').on('click', () => {
        $('#wrong-text-two-0').fadeOut('fast');
        $('#wrongAnswerId-0').show();
    })
    $('#wrong-answer-three-0').on('click', () => {
        $('#wrong-text-three-0').fadeOut('fast');
        $('#wrongAnswerId-0').show();
    })
    
    $('#correct-answer-0').on('click', () => {
        $('#wrongAnswerId-0').hide();
        $('#correctAnswerId-0').show();
        $('#btn0').fadeIn('slow');
        $('#wrong-text-one-0').fadeOut('fast');
        $('#wrong-text-two-0').fadeOut('fast');
        $('#wrong-text-three-0').fadeOut('fast');
    })

    $('#btn0').on('click', () => {
        $('#card0').hide();
        $('#card1').fadeIn('slow');
    })

    //Card1
    $('#hint-box-1').on('click', () => {
        $('#hint-1').slideToggle(500)
    })
    
    $('#wrong-answer-one-1').on('click', () => {
        $('#wrong-text-one-1').fadeOut('fast');
        $('#wrongAnswerId-1').show();
    })
    $('#wrong-answer-two-1').on('click', () => {
        $('#wrong-text-two-1').fadeOut('fast');
        $('#wrongAnswerId-1').show();
    })
    $('#wrong-answer-three-1').on('click', () => {
        $('#wrong-text-three-1').fadeOut('fast');
        $('#wrongAnswerId-1').show();
    })
    
    $('#correct-answer-1').on('click', () => {
        $('#wrongAnswerId-1').hide();
        $('#correctAnswerId-1').show();
        $('#btn1').fadeIn('slow');
        $('#wrong-text-one-1').fadeOut('fast');
        $('#wrong-text-two-1').fadeOut('fast');
        $('#wrong-text-three-1').fadeOut('fast');
    })

    $('#btn1').on('click', () => {
        $('#card1').hide();
        $('#card2').fadeIn('slow');
    })

    //Card2
    $('#hint-box-2').on('click', () => {
        $('#hint-2').slideToggle(500)
    })
    
    $('#wrong-answer-one-2').on('click', () => {
        $('#wrong-text-one-2').fadeOut('fast');
        $('#wrongAnswerId-2').show();
    })
    $('#wrong-answer-two-2').on('click', () => {
        $('#wrong-text-two-2').fadeOut('fast');
        $('#wrongAnswerId-2').show();
    })
    $('#wrong-answer-three-2').on('click', () => {
        $('#wrong-text-three-2').fadeOut('fast');
        $('#wrongAnswerId-2').show();
    })
    
    $('#correct-answer-2').on('click', () => {
        $('#wrongAnswerId-2').hide();
        $('#correctAnswerId-2').show();
        $('#btn2').fadeIn('slow');
        $('#wrong-text-one-2').fadeOut('fast');
        $('#wrong-text-two-2').fadeOut('fast');
        $('#wrong-text-three-2').fadeOut('fast');
    })

    $('#btn2').on('click', () => {
        $('#card2').hide();
        $('#card3').fadeIn('slow');
    })

    //Card3
    $('#hint-box-3').on('click', () => {
        $('#hint-3').slideToggle(500)
    })
    
    $('#wrong-answer-one-3').on('click', () => {
        $('#wrong-text-one-3').fadeOut('fast');
        $('#wrongAnswerId-3').show();
    })
    $('#wrong-answer-two-3').on('click', () => {
        $('#wrong-text-two-3').fadeOut('fast');
        $('#wrongAnswerId-3').show();
    })
    $('#wrong-answer-three-3').on('click', () => {
        $('#wrong-text-three-3').fadeOut('fast');
        $('#wrongAnswerId-3').show();
    })
    
    $('#correct-answer-3').on('click', () => {
        $('#wrongAnswerId-3').hide();
        $('#correctAnswerId-3').show();
        $('#btn3').fadeIn('slow');
        $('#wrong-text-one-3').fadeOut('fast');
        $('#wrong-text-two-3').fadeOut('fast');
        $('#wrong-text-three-3').fadeOut('fast');
    })

    $('#btn3').on('click', () => {
        $('#card3').hide();
        $('#card4').fadeIn('slow');
    })

    //Card4
    $('#hint-box-4').on('click', () => {
        $('#hint-4').slideToggle(500)
    })
    
    $('#wrong-answer-one-4').on('click', () => {
        $('#wrong-text-one-4').fadeOut('fast');
        $('#wrongAnswerId-4').show();
    })
    $('#wrong-answer-two-4').on('click', () => {
        $('#wrong-text-two-4').fadeOut('fast');
        $('#wrongAnswerId-4').show();
    })
    $('#wrong-answer-three-4').on('click', () => {
        $('#wrong-text-three-4').fadeOut('fast');
        $('#wrongAnswerId-4').show();
    })
    
    $('#correct-answer-4').on('click', () => {
        $('#wrongAnswerId-4').hide();
        $('#correctAnswerId-4').show();
        $('#btn4').fadeIn('slow');
        $('#wrong-text-one-4').fadeOut('fast');
        $('#wrong-text-two-4').fadeOut('fast');
        $('#wrong-text-three-4').fadeOut('fast');
    })

    $('#btn4').on('click', () => {
        $('#card4').hide();
        $('.home1').fadeIn('slow');
    })

  });

