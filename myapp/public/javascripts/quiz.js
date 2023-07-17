/*quiz type: what building are you*/
var prompts = [
    {
      prompt: 'You regularly make new friends.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.',
      weight: -1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You feel comfortable just walking up to someone you find interesting and striking up a conversation.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You rarely worry about whether you make a good impression on people you meet.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You enjoy participating in group activities.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You avoid leadership roles in group settings.',
      weight: -1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You tend to avoid drawing attention to yourself.',
      weight: -1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You usually prefer to be around others rather than on your own.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'After a long and exhausting week, a lively social event is just what you need.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You avoid making phone calls.',
      weight: -1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'In your social circle, you are often the one who contacts your friends and initiates activities.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You would love a job that requires you to work alone most of the time.',
      weight: -1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places.',
      weight: 1,
      aspect: 'mind',
      used:   false
    },
    {
      prompt: 'You spend a lot of your free time exploring various random topics that pique your interest.',
      weight: -1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You are not too interested in discussing various interpretations and analyses of creative works.',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You like books and movies that make you come up with your own interpretation of the ending.',
      weight: -1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You are definitely not an artistic type of person.',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You have always been fascinated by the question of what, if anything, happens after death.',
      weight: -1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You become bored or lose interest when the discussion gets highly theoretical.',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You enjoy going to art museums.',
      weight: -1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You rarely contemplate the reasons for human existence or the meaning of life.',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You believe that pondering abstract philosophical questions is a waste of time.',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You believe strict observance of the established rules is likely to prevent attaining a good outcome',
      weight: -1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You often contemplate the complexity of life',
      weight: -1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'You prefer to act immediately rather than speculate about various options',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    {
      prompt: 'It is difficult to get you excited',
      weight: 1,
      aspect: 'energy',
      used:   false
    },
    
    {
      prompt: 'Seeing other people cry can easily make you feel like you want to cry too.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You are very sentimental.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You are more inclined to follow your head than your heart.',
      weight: 1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'Your happiness comes more from helping others accomplish things than your own accomplishments.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You think the world would be a better place if people relied more on rationality and less on their feelings.',
      weight: 1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'Your mood can change very quickly.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You find it easy to empathize with a person whose experiences are very different from yours.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You often have a hard time understanding other people’s feelings.',
      weight: 1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'Your emotions control you more than you control them.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You take great care not to make people look bad, even when it is completely their fault.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You know at first glance how someone is feeling.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You would pass along a good opportunity if you thought someone else needed it more.',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You value justice over mercy',
      weight: 1,
      aspect: 'nature',
      used:   false
    },
    {
      prompt: 'You frequently and easily express your feelings and emotions',
      weight: -1,
      aspect: 'nature',
      used:   false
    },
    
    {
      prompt: 'You often make a backup plan for a backup plan.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You prefer to completely finish one project before starting another.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You like to use organizing tools like schedules and lists.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.',
      weight: -1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You are interested in so many things that you find it difficult to choose what to try next.',
      weight: -1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You prefer to do your chores before allowing yourself to relax.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You lose patience with people who are not as efficient as you.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You often end up doing things at the last possible moment.',
      weight: -1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You usually postpone finalizing decisions for as long as possible.',
      weight: -1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You like to have a to-do list for each day.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'If your plans are interrupted, your top priority is to get back on track as soon as possible.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.',
      weight: -1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You complete things methodically without skipping over any steps.',
      weight: 1,
      aspect: 'tactics',
      used:   false
    },
    {
      prompt: 'You struggle with deadlines.',
      weight: -1,
      aspect: 'tactics',
      used:   false
    }
  ]
  
  var question_weights = new Array(8).fill(1);
  var Q0 =selectQuestion(prompts, 'mind');
  question_weights[0] = Q0[1];
  var Q1 =selectQuestion(prompts, 'energy');
  question_weights[1] = Q1[1];
  var Q2 =selectQuestion(prompts, 'nature');
  question_weights[2] = Q2[1];
  var Q3 =selectQuestion(prompts, 'tactics');
  question_weights[3] = Q3[1];
  var Q4 =selectQuestion(prompts, 'mind');
  question_weights[4] = Q4[1];
  var Q5 =selectQuestion(prompts, 'energy');
  question_weights[5] = Q5[1];
  var Q6 =selectQuestion(prompts, 'nature');
  question_weights[6] = Q6[1];
  var Q7 =selectQuestion(prompts, 'tactics');
  question_weights[7] = Q7[1];
  var Q8 =selectQuestion(prompts, 'mind');
  
  function selectQuestion(prompts, aspect){
    var question = "";
    var weight= 0;
  
    let j = Math.floor(Math.random() * (prompts.length-1));
    while((prompts[j].aspect != aspect) || (prompts[j].used)){
      j = Math.floor(Math.random() * (prompts.length-1));
    }
    question = prompts[j].prompt;
        weight = prompts[j].weight;
              prompts[j].used = true;
        return [question, weight];
  }
  
  document.getElementById("q0").innerHTML = Q0[0];
  document.getElementById("q1").innerHTML = Q1[0];
  document.getElementById("q2").innerHTML = Q2[0];
  document.getElementById("q3").innerHTML = Q3[0];
  document.getElementById("q4").innerHTML = Q4[0];
  document.getElementById("q5").innerHTML = Q5[0];
  document.getElementById("q6").innerHTML = Q6[0];
  document.getElementById("q7").innerHTML = Q7[0];
  
  var selections = new Array(8).fill(0);
  
  //personality values
  var total_mind = 0;
  var total_SN = 0;
  var total_TF = 0;
  var total_JP = 0;
  
  function buttonFunction(button, button_weight, q_num){
    selections[q_num] = button_weight;
    console.log("q" + q_num);
    for (var i = 0; i < 5; i++){
      (document.getElementsByClassName("button" + i))[q_num].classList.remove('active');
    }
    button.classList.add('active');
  }
  
  function submit(){
    console.log(question_weights);
    console.log(selections);
    total_mind = ((question_weights[0]*selections[0])+(question_weights[4]*selections[4]))/2; //+ (question_weights[8]*selections[8])+(question_weights[12]*selections[12]))/4;
    total_SN = ((question_weights[1]*selections[1])+(question_weights[5]*selections[5]))/2; //+ (question_weights[9]*selections[9])+(question_weights[13]*selections[13]))/4;
    total_TF = ((question_weights[2]*selections[2])+(question_weights[6]*selections[6]))/2; //+ (question_weights[10]*selections[10])+(question_weights[14]*selections[14]))/4;
    total_JP = ((question_weights[3]*selections[3])+(question_weights[7]*selections[7]))/2; //+ (question_weights[11]*selections[11])+(question_weights[15]*selections[15]))/4;
    console.log(total_mind);
    console.log(total_SN);
    console.log(total_TF);
    console.log(total_JP);
  
    var building = "Dome";
  
    if((total_mind>=0)&& (total_SN>=0)){
      building = "Stinson-Remick";
      console.log(building);
    }
    else if((total_SN<0)&&(total_TF<0)){
      building = "Debart";
      console.log(building);
    }
    else if(total_JP>=0){
      building = "Fitzpatrick Cushing";
      console.log(building);
    }
    else {
      building = "Dome";
      console.log(building);
    }
  
    document.getElementById("result").innerHTML =("You would be "+ building+ "!");
  
  }
  