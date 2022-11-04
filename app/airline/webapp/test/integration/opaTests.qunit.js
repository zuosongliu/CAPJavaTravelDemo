sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'airline/test/integration/FirstJourney',
		'airline/test/integration/pages/AirelineList',
		'airline/test/integration/pages/AirelineObjectPage'
    ],
    function(JourneyRunner, opaJourney, AirelineList, AirelineObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('airline') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAirelineList: AirelineList,
					onTheAirelineObjectPage: AirelineObjectPage
                }
            },
            opaJourney.run
        );
    }
);