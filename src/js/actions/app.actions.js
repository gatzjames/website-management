var AppConstants = require( '../constants/app.constants' ),
    AppDispatcher = require( '../dispatcher/app.dispatcher' );

var AppActions = {
    //Load initial data
    loadPages: function( pages ){
        AppDispatcher.handleAction({
            actionType: AppConstants.LOAD_PAGES,
            pages: pages
        })
    },
    // Add new Page
    addPage: function( page ){
        AppDispatcher.handleAction({
            actionType: AppConstants.ADD_PAGE,
            page: page
        })
    },
    // Delete a Page
    deletePage: function( id ){
        AppDispatcher.handleAction({
            actionType: AppConstants.DELETE_PAGE,
            id: id
        })
    },
    // Edit a Page
    editPage: function( page ){
        AppDispatcher.handleAction({
            actionType: AppConstants.EDIT_PAGE,
            page: page
        })
    },
    // Search through Page
    searchPages: function( input ){
        AppDispatcher.handleAction({
            actionType: AppConstants.SEARCH_PAGES,
            input: input
        })
    },
    // State of Edit/Add Modal
    setMainModal: function(isVisible, id){
        AppDispatcher.handleAction({
            actionType: AppConstants.MAIN_MODAL,
            isVisible: isVisible,
            id: id
        })
    },
    //State of Warning Modal
    setWarnModal: function(isVisible, id){
        AppDispatcher.handleAction({
            actionType: AppConstants.WARN_MODAL,
            isVisible: isVisible,
            id: id
        })
    },
    //Visibillity of Info Modal
    setInfoModal: function( isVisible ){
        AppDispatcher.handleAction({
            actionType: AppConstants.INFO_MODAL,
            isVisible: isVisible
        })
    }
}

module.exports = AppActions;
