const count = [];
let card_0 = [];
let card_1 = [];
let card_2 = [];
let card_3 = [];
let card_4 = [];

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
        card_0.push(false);
    })
    $('#wrong-answer-two-0').on('click', () => {
        $('#wrong-text-two-0').fadeOut('fast');
        $('#wrongAnswerId-0').show();
        card_0.push(false);
    })
    $('#wrong-answer-three-0').on('click', () => {
        $('#wrong-text-three-0').fadeOut('fast');
        $('#wrongAnswerId-0').show();
        card_0.push(false);
    })
    
    $('#correct-answer-0').on('click', () => {
        $('#wrongAnswerId-0').hide();
        $('#correctAnswerId-0').show();
        $('#btn0').fadeIn('slow');
        $('#wrong-text-one-0').fadeOut('fast');
        $('#wrong-text-two-0').fadeOut('fast');
        $('#wrong-text-three-0').fadeOut('fast');
        card_0.push(true);
    })

    $('#btn0').on('click', () => {
        $('#card0').hide();
        $('#card1').fadeIn('slow');
        if (card_0.includes(false)) {
            console.log('False')
        }
        else {
            count.push(1);
        }
    })

    //Card1
    $('#hint-box-1').on('click', () => {
        $('#hint-1').slideToggle(500)
    })
    
    $('#wrong-answer-one-1').on('click', () => {
        $('#wrong-text-one-1').fadeOut('fast');
        $('#wrongAnswerId-1').show();
        card_1.push(false);
    })
    $('#wrong-answer-two-1').on('click', () => {
        $('#wrong-text-two-1').fadeOut('fast');
        $('#wrongAnswerId-1').show();
        card_1.push(false);
    })
    $('#wrong-answer-three-1').on('click', () => {
        $('#wrong-text-three-1').fadeOut('fast');
        $('#wrongAnswerId-1').show();
        card_1.push(false);
    })
    
    $('#correct-answer-1').on('click', () => {
        $('#wrongAnswerId-1').hide();
        $('#correctAnswerId-1').show();
        $('#btn1').fadeIn('slow');
        $('#wrong-text-one-1').fadeOut('fast');
        $('#wrong-text-two-1').fadeOut('fast');
        $('#wrong-text-three-1').fadeOut('fast');
        card_1.push(true);
    })

    $('#btn1').on('click', () => {
        $('#card1').hide();
        $('#card2').fadeIn('slow');
        if (card_1.includes(false)) {
            console.log('False')
        }
        else {
            count.push(1);
        }
    })

    //Card2
    $('#hint-box-2').on('click', () => {
        $('#hint-2').slideToggle(500)
    })
    
    $('#wrong-answer-one-2').on('click', () => {
        $('#wrong-text-one-2').fadeOut('fast');
        $('#wrongAnswerId-2').show();
        card_2.push(false);
    })
    $('#wrong-answer-two-2').on('click', () => {
        $('#wrong-text-two-2').fadeOut('fast');
        $('#wrongAnswerId-2').show();
        card_2.push(false);
    })
    $('#wrong-answer-three-2').on('click', () => {
        $('#wrong-text-three-2').fadeOut('fast');
        $('#wrongAnswerId-2').show();
        card_2.push(false);
    })
    
    $('#correct-answer-2').on('click', () => {
        $('#wrongAnswerId-2').hide();
        $('#correctAnswerId-2').show();
        $('#btn2').fadeIn('slow');
        $('#wrong-text-one-2').fadeOut('fast');
        $('#wrong-text-two-2').fadeOut('fast');
        $('#wrong-text-three-2').fadeOut('fast');
        card_2.push(true);
    })

    $('#btn2').on('click', () => {
        $('#card2').hide();
        $('#card3').fadeIn('slow');
        if (card_2.includes(false)) {
            console.log('False')
        }
        else {
            count.push(1);
        }
    })

    //Card3
    $('#hint-box-3').on('click', () => {
        $('#hint-3').slideToggle(500)
    })
    
    $('#wrong-answer-one-3').on('click', () => {
        $('#wrong-text-one-3').fadeOut('fast');
        $('#wrongAnswerId-3').show();
        card_3.push(false);
    })
    $('#wrong-answer-two-3').on('click', () => {
        $('#wrong-text-two-3').fadeOut('fast');
        $('#wrongAnswerId-3').show();
        card_3.push(false);
    })
    $('#wrong-answer-three-3').on('click', () => {
        $('#wrong-text-three-3').fadeOut('fast');
        $('#wrongAnswerId-3').show();
        card_3.push(false);
    })
    
    $('#correct-answer-3').on('click', () => {
        $('#wrongAnswerId-3').hide();
        $('#correctAnswerId-3').show();
        $('#btn3').fadeIn('slow');
        $('#wrong-text-one-3').fadeOut('fast');
        $('#wrong-text-two-3').fadeOut('fast');
        $('#wrong-text-three-3').fadeOut('fast');
        card_3.push(true);
    })

    $('#btn3').on('click', () => {
        $('#card3').hide();
        $('#card4').fadeIn('slow');
        if (card_3.includes(false)) {
            console.log('False')
        }
        else {
            count.push(1);
        }
    })

    //Card4
    $('#hint-box-4').on('click', () => {
        $('#hint-4').slideToggle(500)
    })
    
    $('#wrong-answer-one-4').on('click', () => {
        $('#wrong-text-one-4').fadeOut('fast');
        $('#wrongAnswerId-4').show();
        card_4.push(false);
    })
    $('#wrong-answer-two-4').on('click', () => {
        $('#wrong-text-two-4').fadeOut('fast');
        $('#wrongAnswerId-4').show();
        card_4.push(false);
    })
    $('#wrong-answer-three-4').on('click', () => {
        $('#wrong-text-three-4').fadeOut('fast');
        $('#wrongAnswerId-4').show();
        card_4.push(false);
    })
    
    $('#correct-answer-4').on('click', () => {
        $('#wrongAnswerId-4').hide();
        $('#correctAnswerId-4').show();
        $('#btn4').fadeIn('slow');
        $('#wrong-text-one-4').fadeOut('fast');
        $('#wrong-text-two-4').fadeOut('fast');
        $('#wrong-text-three-4').fadeOut('fast');
        card_4.push(true);
    })

    $('#btn4').on('click', () => {
        $('#card4').hide();
        $('.home1').fadeIn('slow');
        if (card_4.includes(false)) {
            console.log('False')
        }
        else {
            count.push(1);
        }

        $('#score').text(`You've got ${count.length} out of 5`)
    })

    $('#reload').click(function() {
        location.reload();
    });

  });

