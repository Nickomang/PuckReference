var timeDelay = 1200;
 
$(document).ready(function () {
    if(document.URL.indexOf("espn") != -1){
		addESPNResetEvents();
        addESPNLinks();
    }
});

function addESPNLinks() {
    $('.RotoWorldLink').remove();
    $('.playertablePlayerName').children(':first-child').each(function() {
        $(this).parent().append(getRotoWorldLink($(this).text()));
        $(this).parent().append(getHockeyReferenceLink($(this).text()));
    });
}

function addESPNResetEvents(){
    if (document.URL.indexOf("/fhl/freeagency") == -1) {
        timeDelay = 400;
    }
	$('#lastNameSubmit, #playerTableHeader, .playertablefiltersmenucontainer, .games-toolset').click(function() {
		setTimeout('addSPNLinks()', timeDelay);
	});
}

function getRotoWorldLink(playerName){
	playerName = playerName.substr(playerName.indexOf(" ") + 1) + ", " + playerName.substr(0, playerName.indexOf(" "));
	return '<a class="RotoWorldLink" href="http://www.rotoworld.com/content/playersearch.aspx?searchname=' + playerName + 
	'&sport=nhl"><img src="http://www.rotoworld.com/favicon.ico" height="12" width="12" border="0"' +
		' style="margin:0 6px 0 6px" title="RotoWorld" /></a>';

}

function getHockeyReferenceLink(playerName){
    playerName = playerName.substr(0, playerName.indexOf(" ")) + "+" + playerName.substr(playerName.indexOf(" ") + 1) ;
    return '<a class="HockeyReferenceLink" href="http://www.hockey-reference.com/player_search.cgi?search=' + playerName + '"><img src="http://www.hockey-reference.com/favicon.ico" height="12" width="12" border="0"' +
        ' style="margin:0 6px 0 6px" title="HockeyReference" /></a>';

}