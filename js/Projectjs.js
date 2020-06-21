var next=1,count,i,current=0;
var file_source=[
    [
        'Accuracy',
        'the quality or state of being correct or precise. Eg-"we have confidence in the accuracy of the statistics"',
        'No'
    ],
    [
        'Acknowledged',
        'deep love and respect. Eg-"he gave her a look of adoration"',
        'No'
    ],
    [
        'Adoration',
        'recognized as being good or important. Eg-"he is an acknowledged expert in the field"',
        'No'
    ],
    [
        'Activeness',
        'engaging or ready to engage in physically energetic pursuits. Eg-"although he was seventy he was still robust and active"',
        'No'
    ],
    [
        'Adaptability',
        'the quality of being able to adjust to new conditions. Eg-"adaptability is an advantage in the harshly competitive global economy"',
        'No'
    ],
    [
        'Adroitness',
        'cleverness or skill. Eg-"he lacks political adroitness"',
        'No'
    ],
    [
        'Adventure',
        'an unusual and exciting or daring experience. Eg-"her recent adventures in Italy"',
        'No'
    ],
    [
        'Affection',
        'a gentle feeling of fondness or liking. Eg-"she felt affection for the wise old lady"',
        'No'
    ],
    [
        'Affluence',
        'the state of having a great deal of money; wealth. Eg-"a sign of our growing affluence"',
        'No'
    ],
    [
        'Aggressive',
        'ready or likely to attack or confront; characterized by or resulting from aggression. Eg-"he is very uncooperative and aggressive"',
        'No'
    ],
    [
        'Agility',
        'ability to move quickly and easily. Eg- "though he was without formal training as dancer or athlete, his physical agility was inexhaustible"',
        'No'
    ],
    [
        'Alertness',
        'the quality of being alert. Eg-"Walsall were indebted to the bravery and alertness of their goalkeeper"',
        'No'
    ],
    [
        'Altruism',
        'disinterested and selfless concern for the well-being of others. Eg- "some may choose to work with vulnerable elderly people out of altruism"',
        'No'
    ],
    [
        'Ambition',
        'a strong desire to do or achieve something. Eg- "her ambition was to become a pilot"',
        'No'
    ],
    [
        'Amusement',
        'the state or experience of finding something funny. Eg-"we looked with amusement at our horoscopes"',
        'No'
    ],
    [
        'Anticipation',
        'the action of anticipating something; expectation or prediction.  Eg-"her eyes sparkled with anticipation"',
        'No'
    ],
    [
        'Appreciation',
        'recognition and enjoyment of the good qualities of someone or something.  Eg-"I smiled in appreciation"',
        'No'
    ],
    [
        'Approachable',
        'friendly and easy to talk to. Eg-"managers should be approachable"',
        'No'
    ],
    [
        'Articulate',
        'having or showing the ability to speak fluently and coherently. Eg-"an articulate account of their experiences"',
        'No'
    ],
    [
        'Assertiveness',
        'confident and forceful behaviour. Eg-"she has difficulty standing up for herself, even when assertiveness may be warranted"',
        'No'
    ],
    [
        'Assurance',
        'a positive declaration intended to give confidence; a promise. Eg-"he gave an assurance that work would begin on Monday"',
        'No'
    ],
    [
        'Attentiveness',
        'the action of paying close attention to something. Eg-"half the children who ate the cereal showed no improvement in attentiveness"',
        'No'
    ],
    [
        'Attractiveness',
        'the quality of being pleasing or appealing to the senses. Eg-"this scheme could enhance the attractiveness of the area"',
        'No'
    ],
    [
        'Audacity',
        'a willingness to take bold risks. Eg-"he whistled at the sheer audacity of the plan"',
        'No'
    ],
    [
        'Availability',
        'the quality of being able to be used or obtained. Eg-"turkey producers had been losing sales because of the all-year-round availability of beef"',
        'No'
    ],
    [
        'Awareness',
        'knowledge or perception of a situation or fact. Eg-"we need to raise public awareness of the issue"',
        'No'
    ],
    [
        'Awe',
        'a feeling of reverential respect mixed with fear or wonder. Eg-"they gazed in awe at the small mountain of diamonds"',
        'No'
    ],
    [
        'Balance',
        'an even distribution of weight enabling someone or something to remain upright and steady. Eg-"she lost her balance and fell"',
        'No'
    ],
    [
        'Beauty',
        'a combination of qualities, such as shape, colour, or form, that pleases the aesthetic senses, especially the sight. Eg-"I was struck by her beauty"',
        'No'
    ],
    [
        '',
        '',
        ''
    ]
];
$(document).ready(function(){
    $("#NoButton").click(function(){
        for(i=next;i<29;i++)
        {
            if(file_source[i][2]=="Yes")
            next++;
            else
            break;
        }
        $("#quality").text(file_source[next][0])
        $("#Quality_desc").text(file_source[next][1])
        current=next;
        if(next==29)
        alert("Sorry, No More Qualities present now");    
        else
        next++;
    });
});
$(document).ready(function(){
    $("#YesButton").click(function(){
        for(i=next;i<29;i++)
        {
            if(file_source[i][2]=="Yes")
            next++;
            else
            break;
        }    
        $("#Second_Row").append("<label class='Qual'>"+file_source[current][0]+"</label>")
        file_source[current][2]='Yes';
        $("#quality").text(file_source[next][0])
        $("#Quality_desc").text(file_source[next][1])
        current=next;
        if(next==29)
        alert("Sorry, No More Qualities present now");    
        else
        next++;
        var x = document.getElementById("Selection_count").textContent;
        count=parseInt(x);
        count++;
        document.getElementById("Selection_count").textContent=count+"";
    });
});
