import "commonReactions/all.dsl";

context {
    // declare input variables phone and name
    input phone: string;
    input name: string = ""; 

    // declare output variables 
    output q1_rate: string = "";
    output q2_rate: string = "";
    output q3_rate: string = "";
    output q1_feedback: string = "";
    output q2_feedback: string = "";
    output q3_feedback: string = "";
    output final_feedback: string = "";
    output call_back: string = "";

}

start node root {
    do {
        #connectSafe($phone);
        #waitForSpeech(1000); 
        #sayText("Hello " + $name + ". this is Dasha from Fintruist. It seems like you've used our servies earlier today. ");
        #sayText("I'd like to ask you a few questions about the experience. Do you have two minutes now?"); 
        wait *;
    }
    transitions {
        question_1: goto question_1 on #messageHasIntent("yes"); 
        call_back: goto when_call_back on #messageHasIntent("no"); 
    }
}

node question_1 {
    do {
        #say("question_1"); 
        wait *;
    }
    transitions {
        q1Evaluate: goto q1Evaluate on #messageHasData("rating"); 
    }
}

node q1Evaluate {
    do {
        set $q1_rate =  #messageGetData("rating")[0]?.value ?? ""; 
        var q1_num = #parseInt($q1_rate); 
        if (q1_num >= 4 && q1_num <=5) {
            goto question_2;
        }
        else {
            goto question_1_n; 
        }
    }
    transitions {
        question_2: goto question_2;
        question_1_n: goto question_1_n;
    }
}

node question_1_n {
    do  {
        #sayText("I'm sorry to hear your experience was less than optimal. What could have been done better?");
        wait *;
    }
    transitions {
        q1_n_to_q2: goto q1_n_to_q2 on true;
    }
    onexit {
        q1_n_to_q2: do {
            set $q1_feedback = #getMessageText();
            #log($q1_feedback); // console log 
        }
    }
}

node q1_n_to_q2 {
    do {
        #say("transition"); 
        goto question_2;
    }
    transitions {
        question_2: goto question_2;
    }
}

node question_2 {
    do {
        #sayText("Cool. On a scale of 1 to 5 ");
        #sayText("how did you feel about the effectiveness of using web 3.0 tech instead of standard 2.0 one?");
        wait *;
    }
    transitions {
        q2Evaluate: goto q2Evaluate on #messageHasData("rating");
    }
}

node q2Evaluate {
    do {
        set $q2_rate = #messageGetData("rating")[0]?.value ?? ""; 
        var q2_num = #parseInt($q2_rate);
        if (q2_num >=4) {
            goto question_3;
        } else {
            goto question_2_n;
        }
    }
    transitions {
        question_3: goto question_3;
        question_2_n: goto question_2_n;
    }
}

node question_2_n {
    do {
        #sayText("So sorry to hear that you thought our methods are not that efficient. What do you think can be done better?");
        wait *;
    }
    transitions {
        q2_n_to_q3: goto q2_n_to_q3 on true;
    }
    onexit {
        q2_n_to_q3: do {
            set $q2_feedback = #getMessageText();
        }
    }
}

node q2_n_to_q3 {
    do {
        #say("transition");
        goto question_3;
    }

    transitions {
        question_3: goto question_3;
    }
}

node question_3 {
    do {
        #sayText("How would you rate your overall experience on a scale of one to five?");
        wait*;
    }
    transitions {
        q3Evaluate: goto q3Evaluate on #messageHasData("rating");
    }
}

node q3Evaluate {
    do {
        set $q3_rate =  #messageGetData("rating")[0]?.value??"";
        var q3_num = #parseInt($q3_rate);
        if (q3_num >=4) {
            goto question_3_p;
        } else {
            goto question_3_n;
        }
    }
    transitions {
        question_3_p: goto question_3_p;
        question_3_n: goto question_3_n;
    }
}

node question_3_p {
    do {
        #sayText("Thank you for such a high rating of your experience. Can you please share what especially stood out?");
        wait*;
    }
    transitions {
        final_q: goto final_q on true;
    }
    onexit {
        final_q: do {
            set $q3_feedback = #getMessageText();
        }
    }
}

node question_3_n {
    do {
        #sayText("I am so sorry to hear that you did not enjoy the experience. Can you please tell me what you feel could have been done better? ");
        wait*;
    }
    transitions {
        q3_to_final: goto q3_to_final on true;
    }
    onexit {
        q3_to_final: do {
            set $q3_feedback = #getMessageText();
        }
    }
}

node q3_to_final {
    do {
        #say("transition");
        goto final_q;
    }
    transitions {
        final_q: goto final_q;
    }
}

node final_q {
    do {
        #sayText("Thank you so much. Anything else we should make note of?");
        wait*;
    }
    transitions {
       final_bye : goto final_bye on true;
    }
    onexit {
        final_bye: do {
            set $final_feedback = #getMessageText();
        }
    }
}

node final_bye {
    do {
        #sayText("Thank you so much for your time and for using Fintruist! Your feedback will help us serve you better. Bye!");
        exit;
    }
}

node when_call_back {
    do {
        #sayText( "When can I call you back?" );
        wait *;
    }
    transitions {
       call_back: goto call_back on true;
    }
    onexit {
        call_back: do {
            set $call_back = #getMessageText();
        }
    }
} 

node call_back {
    do {
        #sayText("Okay, I'll call you later. Bye!");
        exit;
    }
}

digression how_are_you
{
    conditions {on #messageHasIntent("how_are_you");}
    do {
        #sayText("I'm well, thank you!", repeatMode: "ignore"); 
        #repeat();  
        return; 
    }
}