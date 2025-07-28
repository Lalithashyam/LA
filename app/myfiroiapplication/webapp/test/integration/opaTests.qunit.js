sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myfiroiapplication/test/integration/FirstJourney',
		'myfiroiapplication/test/integration/pages/POsList',
		'myfiroiapplication/test/integration/pages/POsObjectPage',
		'myfiroiapplication/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myfiroiapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);