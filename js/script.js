
// Jquery start

$(document).ready(function(){
	
	// itrm.1

	$("#a_btn").on("click", function(){
	alert("What's up darling?");
	});

	// itrm.2

	$("#show").on("click", function(){
		$("#sdt").show("fast");
	});

	$("#hide").on("click", function(){
		$("#sdt").hide("slow");
	});

	$("#toggle").on("click", function(){
		$("#sdt").toggle(1000);
	});

	// itrm.3

	$("#s_up").on("click", function(){
		$("#slide").slideUp();
	});

	// Item 4

	$("#click").on("click", function(){
		$(this).hide("slow");
	});

	// Item 5

	$("#dblclick").on("dblclick", function(){
		$(this).hide("slow");
	});

	// Item 6

	$("#mouseenter").on("mouseenter", function(){
		$(this).hide("slow");
	});

	// Item 7

	$("#mouseleave").on("mouseleave", function(){
		$(this).hide("slow");
	});

	// Item 8

	$("#mousedown").on("mousedown", function(){
		$(this).hide("slow");
	});

	// Item 9

	$("#mouseup").on("mouseup", function(){
		$(this).hide("slow");
	});

	// Item 10

	$("#hover").hover(function(){
    alert("What's up, darling? Welcome to my place.😏");
	},
	function(){
	alert("Why are you leaving so soon? No problem, come back early tomorrow. I'll wait for you.😉");
	});

	// Item 11

	$(".focus").on("focus", function(){
	    $(this).css("background-color", "yellow");
	});

	$(".focus").on("blur", function(){
	    $(this).css("background-color", "green");
	});

	// Item 12

	$("#fdi_btn").on("click", function(){
	    $("#fadein").fadeIn();
	});

	// Item 13

	$("#fdo_btn").on("click", function(){
	    $("#fadeout").fadeOut();
	});

	// Item 14

	$("#fdt_btn").on("click", function(){
	    $("#fadetoggle").fadeToggle();
	});

	// Item 14

	$("#fdto_btn").on("click", function(){
	    $("#fadeto").fadeTo("slow", 0.15);
	});

	// Item 16

	$("#flip").on("click", function(){
	    $("#sdd").slideDown();
	});

	// Item 17

	$("#aim_btn").on("click", function(){
	    $("#animations").animate({left: "700px"});
	});

	// Item 18

	$("#aim_m_btn").on("click", function(){
	    $("#animate_m").animate({
	    	left: "700px",
	    	opacity: '0.5',
	    	height: '150px',
		    width: '150px',
	    });
	});

	// Item 19

	$("#aim_rv_btn").on("click", function(){
	    $("#animate_rv").animate({
	    	left: "700px",
	    	height: '+=100px',
		    width: '+=100px',
	    });
	});

	// Item 20

	$("#aim_pd_btn").on("click", function(){
	    $("#animate_pd").animate({
	    	left: "700px",
	    	height: "toggle",
		    width: "100px",
	    });
	});

	// Item 21

	$("#aim_qf_btn").on("click", function(){
	    var div = $ ("#animate_qf")
	    div.animate({height: "200px", opacity: "0.4"}, "slow");
	    div.animate({width: "200px", opacity: "0.8"}, "slow");
	    div.animate({height: "100px", opacity: "0.4"}, "slow");
	    div.animate({width: "100px", opacity: "0.8"}, "slow");
	});

	// Item 22

	$("#aim_qfm_btn").on("click", function(){
	    var div = $ ("#animate_qfm")
	    div.animate({height: "200px", opacity: "0.4"}, "slow");
	    div.animate({width: "200px", opacity: "0.8"}, "slow");
	    div.animate({fontSize: "3em"}, "slow");
	    div.animate({height: "100px", opacity: "0.4"}, "slow");
	    div.animate({fontSize: "17px"}, "slow");
	    div.animate({width: "100px", opacity: "0.8"}, "slow");
	});

	// Item 23

	$("#stopm_h1").on("click", function(){
	    $("#stopm").slideDown(3000);
	});

	$("#stopm_btn").on("click", function(){
	    $("#stopm").stop();
	});

	// Item 24

	$("#cbf_btn").on("click", function(){
	    $("#cbf").hide("slow", function(){
	    	alert("আমার দিকে তাকায় আছেন কেন দেখতাছেনা নাই😑 সবকিছু সবসময় খালি বুঝায় দেওয়া লাগে 😶");
	    });
	});

	// Item 25

	$("#cbff_btn").on("click", function(){
	    $("#cbff").hide(5000);
	    	alert("আমার দিকে তাকায় আছেন কেন দেখতাছেনা নাই😑 সবকিছু সবসময় খালি বুঝায় দেওয়া লাগে 😶");
	});

	// Item 26

	$("#cig_btn").on("click", function(){
	    $("#cig").css("color", "red").slideUp(0).slideDown(2000);
	});

	// Item 27

	$("#gcon_t_btn").on("click", function(){
	    alert("Text: " + $("#gcon").text())
	});

	$("#gcon_h_btn").on("click", function(){
	    alert("HTML: " + $("#gcon").html())
	});

	// Item 28

	$("#gconv_h_btn").on("click", function(){
	    alert("Value: " + $("#gconv").val())
	});

	// Item 29

	$("#sc_thv_htbtn").on("click", function(){
	    $("#sc_thv_h").text("Give me the details.");
	});

	$("#sc_thv_tbtn").on("click", function(){
	    $("#sc_thv_te").html("<b>Give me your personal Gmail.</b>");
	});

	$("#sc_thv_vbtn").on("click", function(){
	    $("#sc_thv_v").val("personal phone number");
	});

	// Item 30

	$("#cbf_thvt_btn").on("click", function(){
	    $("#cbf_thvt").text(function(i, origText){
	    	return "Old text: " + origText + " New text: What's up baby? (index: " + i + ")";
	    });
	});

	$("#cbf_thvh_btn").on("click", function(){
	    $("#cbf_thvh").html(function(i, origText){
	    	return "Old html: " + origText + " New html: If you a girl I want to take you in a sweet date. (index: " + i + ")";
	    });
	});

	// Item 31

	$("#att_btn").on("click", function(){
	    $("#att").attr("href", "https://www.youtube.com/@sanaulhawk001");
	});

	// Item 32

	$("#att_t_btn").on("click", function(){
	    $("#att_t").attr({
	    	"href" : "https://www.youtube.com/@sanaulhawk001",
	    	"title" : "youtube"
	    });
	});

	// Item 33

	$("#appe_t_btn").click(function(){
        $(".appe_t").append(" <b>It's my heart ❤️  </b>.");
    });

	$("#appe_li_btn").on("click", function(){
	    $("#appe_ol").append("<li>It's my heart ❤️</li>");
	});

	// Item 34

	$("#prep_t_btn").click(function(){
        $(".prep_t").prepend(" <b>It's my heart ❤️  </b>.");
    });

	$("#prep_li_btn").on("click", function(){
	    $("#prep_ol").prepend("<li>It's my heart ❤️</li>");
	});
	
});

// Jquery end