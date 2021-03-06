<?php require_once "../../php/init.php"; ?><html><head><meta charset="utf-8"><title>Responsible Visitor Charter  - Brecon Beacons National Park, Wales</title><script type='text/javascript' src='../../js/main.min.js'></script></head><body><div class="main-content clearfix">
<!--SearchStart//-->
<h1>Responsible Visitor Charter</h1>
<div class="visitor-charter clearfix">
<h2>Support the Visitor Charter</h2>
<div class="charterPledge" id="pledge-form">
<p><strong>Join
<span id="pledge-count">379</span>other visitors who 
                         have pledged to show their love for the Brecon Beacons by being responsible visitors 
                         to our National Park:</strong></p>
<form action="/plan/visitor_information/visitorcharterpledge" method="POST">
<div class="formRow">
<label for="pledgeName">Your name</label>
<input id="pledgeName" name="name" type="text"/></div>
<div class="formRow">
<label for="pledgeEmail">Your email</label>
<input id="pledgeEmail" type="text" name="email" placeholder="(optional)"/></div>
<input class="pledgeSubmit" type="submit" value="I love the Brecon Beacons" onclick="onPledge(); return false;"/></form></div>
<div class="charterPledge hide" id="pledge-response">
<h2>Thank you!</h2>
<p><strong>You've been added to the
<span id="pledge-count">379</span>who've pledged their support.</strong></p>
<p>Could you now share the charter with your friends?</p>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-559cda141f16c1e0" async="async"/>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<div class="addthis_sharing_toolbox"/></div></div>
<script><![CDATA[function onPledge() {
                        var name = $("#pledgeName").val();
                        var email = $("#pledgeEmail").val();

                        if (name === "") {
                            alert("Please enter your name to pledge your support");
                            return false;
                        } else {                         
                      $("#pledge-form").addClass('working');
                      $("#pledge-form .pledgeSubmit").val('saving...');
                        }

                        $.ajax({
                          type: "POST",
                          url: '/plan/visitor_information/visitorcharterpledge',
                          data: { name: name, email: email},
                          success: function () {                           
                        $("#pledge-form").hide();
                        $("#pledge-response").show();
                          }
                      });

                    }]]></script>
<div class="article-video right clearfix"/>
<p/><h4 style="text-align: center;">
<span style="font-size:14px;"><span style="color:#008000;"><strong><img src="/website/var/tmp/thumb_6360__auto_850904660de984af948beee3aee98a4f.jpeg" style="width:600px;"/></strong></span></span></h4>
<h4>
<span style="font-size:14px;"><span style="color:#008000;"><strong>5 ways to love the Brecon Beacons</strong></span></span><br/>
<br/>We have created a simple to follow 5 point guide to how you can visit the National Park in a responsible way! As a responsible visitor your thoughtful actions make a big difference. Thank you for helping to keep the Brecon Beacons special.</h4>&nbsp; 
<br/>
<span style="color:#008000;"><strong>1.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Bright sparks switch off</strong></span><br/>On a clear night, gaze up at one of Europe&nbsp;&#39;s darkest skies and see the full glory of the Milky Way. Switching off lights and turning down the heating when not needed, does more than save energy and reduce carbon emissions. It helps preserve the magical night-time in this International Dark Sky Reserve.
<br/>&nbsp; 
<br/>
<span style="color:#008000;"><strong>2.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Eat good, honest, local food</strong></span><br/>All the right ingredients are here: clean air, fertile valleys and an abundance of fresh water. The end result is delicious Welsh lamb, traditional Welsh breakfasts and even Welsh whisky! You&nbsp;&#39;ll taste local food in gourmet restaurants, cosy pubs, gorgeous tea shops, farmers&nbsp;&#39; markets, delis and at our diverse range of festivals.
<br/>
<br/>
<div style="text-align: center;">&nbsp; 
<img src="/website/var/tmp/thumb_6358__auto_c41f433921fb03da5a6ff36cbd157612.jpeg" style="text-align: center; width: 150px;"/></div>
<span style="color:#008000;"><strong>3.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Less is more</strong></span><br/>Reusing shopping bags and recycling is a way of life here. Thank you for helping us reduce the amount that&nbsp;&#39;s thrown away. Most towns and villages have recycling facilities, and your accommodation provider may provide recycling bins - if not, please ask!
<span style="text-align: center;">&nbsp; </span><br/>
<br/>
<span style="color:#008000;"><strong>4.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Change gear</strong></span><br/>It&nbsp;&#39;s easy and fun to get around outdoors: try the bus, train, bike, canoe, horse or just your walking boots! There&nbsp;&#39;s even a fleet of funky two-person electric cars supported by a friendly network of charging points across the Park. You&nbsp;&#39;ll be amazed how special the countryside looks from a different viewpoint.
<br/>&nbsp; 
<br/>
<span style="color:#008000;"><strong>5.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Feel closer, breathe easier</strong></span><br/>Our beautiful landscape is good for you - treat it as you would a friend. Get up close to wildlife, flowers and plants but please don&nbsp;&#39;t disturb them. Use footpaths where possible, keep your dog under control and always take your litter home. Thank you.
<br/>&nbsp; 
<div style="text-align: center;">
<img src="/website/var/tmp/thumb_6359__auto_74ee433b70c43883e8f2a227e2539389.jpeg" style="width: 300px;"/></div>
<br/>
<span style="color:#008000;"><strong>Sharing is caring!</strong></span><br/>If you&nbsp;&#39;re being responsible in the National Park either by eating local food, taking public transport or by any of the other ways mentioned above why not share with us on social media using the hashtag #IloveBreconBeacons
<br/>
<br/>
<a href="/all_pdfs_and_documents_in_here_please/3000_bbnpa_visitor_charter_eng.pdf">Download Responsible Visitor Charter (English)</a><br/>
<a href="/all_pdfs_and_documents_in_here_please/3000_bbnpa_visitor_charter_wel.pdf">Download Responsible Visitor Charter (Welsh)</a>
<!--SearchEnd//-->
<div class="hightlights"/></div></body></html>