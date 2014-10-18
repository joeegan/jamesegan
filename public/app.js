var data = ['Williams','Jones','Smith','Walsh','Hall','Murphy','Walker','Hunt','Jackson','Atherton','Taylor','Lewis','Lee','Evans','Davies','Barlow','Leigh','Lloyd','Berry','Moore','Milward','Nicholson','Griffiths','Roberts','Roscoe','Mills','Millward','Gill','Middleton','Flynn','Morris','Newman','Daniel','Ward','Wright','Poole','Wells','Watson','Marsh','Clark','Polson','Whittle','Holt','Clay','Bailey','Reid','Dean','McNeill','Barnes','Cook','Charlton','Howarth','Bate','Crawford','Sweeney','Riley','Kelly','Myatt','Gilbert','Whyte','Ashton','Heywood','Pritchard','Wild','Brady','Dawson','Richardson','Morgan','Monaghan','Owens','Loftus','Corbett','Orme','Page','Ball','Metcalfe','Clarke','Fairhurst','Exley','Parr','Horne','Leech','Parnell','Moran','Sheridan','Chantler','Brooks','Goodwin','Wolstencroft','Jordan','Horsefield','Pinnock','Sharples','Ryan','Wilson','Edwards','Halliwell','Farrell','Logan','Kay','Burke','Mac','Stephens','Foster','O’Brien','Rowe','Marshall','Thomas','Brown','Parker','Hately','Mawdsley','Robe','Mcdermott','Andrews','Gregory','Eglin','Whiteley','Goodall','Allison','Allan','Henshall','Hooper','Maloney','Mistry','Beed','Cunliffe','Mallon','Kendal','Lander','Ashcroft','Willington','Whit','Ullman','Storey','Beecham','Bethell','Allport','Fox','Kanes','Iddon','Singleton','Owen','Aldred','Lanebridge','Boyall','Coburn','Doyle','Rolinson','Waring','Dunn','Brandwood','Kirwan','Horsfield','Harmer','Ogden','Pendebury','Matthams','Spurgeon','Vinton','Whalley','Paylor','Powers','Bowman','Carr','Downey','Fernley','Clayton','Borland','Pointon','Nield','Hollingworth','Uttley','Sharrock','Woodhouse','Fitzgerald','Donalds','Routledge','Huskinson','Doherty','Ginty','Blears','Callow','Webster','Cheetham','Glend','Cope','Kristensen','Mahon','Holgate','Mooney','Ferguson','Brooke','Booth','Billington','Blakesley','O’Connor','Oxley','Mouga','Jarrett','Kelsall','Cain','Corcoran','Diskin','Smart','Weton','Paterson','Gard','West','Yeomans','Halliday','Astle','Eagle','Jenkins','Burns','Bowden','Pounder','Rice','Matthews','Howie','Ewart','Gerrard','Stanley','Downie','Cousins','Hampson','Bardsley','Parry','Sullivan','Ridley','Melia','Jeffs','Hardy','Barwell','Donlan','Dolcy','Edge','Barnett','Killeen','Playfair','Uddin','Kemp','Lomax','Alexander','Childs','Campbell','Beech','Chance','Mitchinson','Rothwell','Hughes','Crosby','Hallam','Hutchinson','Hodgkinson','Mathews','Buckley','Baulk','Standing','Sheppard','Tansey','Dacey','Eyres','Thomson','Sellers','Frodsham','Auton','Miller','Ratcliffe','Charnock','Fanning','Sumner','Townsley','Yates','Connor','Austerberry','Harrison','Brann','Timperley','Battersby','Harrington','Biggs','Armitt','Timms','Boslem','Patton','Palmer','Monk','Mcloughlin','Kenyon','Lawlor','Bancroft','Halpern','Turner','Watkins','Wendy','Stoddard','Rushton','Leach','Latham','Newall','Cunningham','Denton','Beckford','Hoyte','Willis','Wallace','Howard','Harrop','Mayling','Stanton','Stackhouse','Casey','Grainger','Marsland','King','Kilford','Hilton','Musgrave','Verdon','Nicholls','Kerr','Hayes','Hurley','Jefferies','McGarry','Boyce','Samuel','Stephenson','Walmsley','Tullett','Chadwick','Gleave','Mclain','Hartshorn','Higson','Ryder','Whitehead','Kirwin','Perry','Cove','Tosh','Spencer','Donnachie','Downes','Eltis','Grant','Hamilton','Carsley','Bentley','Mcfadyen','Moorehouse','Ingham','Long','Caplan','Gannon','Rowan','Field','Holloway','Reedy','Lancaster','Rawkins','Haine','Mckeown','Steeden','Pett','Forrest','Disley','Rawlinson','Lomas','Houghton','Whittaker','Siddall','Wrench','Macdonald','Mellor','Craig','Catterall','Billingsley','Archer','Littlefield','Tomlinson','Taggart','Mcguinness','Shone','Child','Ditchfield','Cooper','French','Crossley','Bates','Millinson','Mcintyre','Manson','Clancy','Carter','Fitchett','Groom','Gilbourne','Hartmann','Parsonage','Fletcher','Sankey','White','Stone','Winward','Fell','Carney','Clifton','Powell','Irvine','Gardner','Dandy','Brookes','Bannister','Holland','Maguire','Reeves','Wood','Selby','Stevenson','Hurst','Baker','Collins','Dervin','Hudson','Roebuck','Teal','Howlett','Hutchison','Kennedy','Feeney','Broadbent','Callaghan','Ashworth','Abbott','Hibbert','Maudlin','Waldron','Robertson','Seed','Wary','Pickup','Enright','Fitzpatrick','Cartwright','Preston','Rodden','Shepley','Wilburn','Parkinson','Pemberton','O’Driscoll','Moffatt','Barrett','Sherriff','Grimshaw','Keir','Johnston','Lowndes','Broughton','Connolly','Armstrong','Davis','Millar','O’Hara','Purcell','Harriman','Plumb','Brodie','Snowdon','Waddington','Speed','Bowes','Appleby','Beedles','Cadman','Carleton','Holmes','Markham','Simpson','Shaw','Reilly','Railton','Edgley','Gunn','Kendell','Burnand','Anderson','Simmons','Stanway','Swift','George','Johnson','Robinson','Martin','Scott'];
var strSpans = convertToSpans(data);

function rand(multiplier) {
   return Math.round(Math.random() * multiplier)
}

function convertToSpans(arr){
   // Node creation is more verbose to program than string replacing.
   var str = '';
   var temp = '<span style="left:{0}px; top:{1}px">{2}</span>';
   arr.forEach(function(item, idx){
      str += temp.replace('{0}', rand(document.documentElement.clientWidth - 40))
         .replace('{1}', rand(document.documentElement.clientHeight - 10))
         .replace('{2}', item);
   });
   return str;
}

function fadeIn(el, speed){
   var o = 0;
   setInterval(function(){
      if (o < 0.9) {
         o = o + 0.1;
         el.style.opacity = o;
      }
   }, speed);
}

window.onload = function(){
   document.getElementsByTagName('body')[0].innerHTML = strSpans;
   var spans = document.getElementsByTagName('span');
   for (var i = 0; i < spans.length-1; i++) {
      fadeIn(spans[i], rand(100));
   }
};
