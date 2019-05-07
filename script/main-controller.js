app.controller('mainController', function($location) {
    let self = this;

    self.currentPage = 'home';
    self.pages = {
        home: {
            title: 'Home',
            subTitle: 'Overview of your activity'
        },
        documents: {
            title: 'Documents',
            subTitle: 'Create/edit your documents'
        },
        requests: {
            title: 'Requests',
            subTitle: 'Take your action'
        },
        userPrefs: {
            title: 'User Preferences',
            subTitle: 'Edit your preferences'
        }
    };


    self.activeState = (page) => {
        if(page === self.currentPage) {
            return 'active';
        } else {
            return '';
        }
    };

    self.isAdmin = () => {
        return true;
    };

    self.documents = [
        {id: 1, title: 'Document 1', requester: 'User 2', state: 'Submitted', createdAt: '2019-04-21'},
        {id: 2, title: 'Document 2', requester: 'User 2', state: 'Saved', createdAt: '2019-04-20'},
        {id: 3, title: 'Document 3', requester: 'User 2', state: 'Saved', createdAt: '2019-04-17'},
        {id: 4, title: 'Document 4', requester: 'User 5', state: 'Submitted', createdAt: '2019-04-17'},
        {id: 5, title: 'Document 5', requester: 'User 4', state: 'Submitted', createdAt: '2019-04-15'},
        {id: 6, title: 'Document 6', requester: 'User 3', state: 'Withdrawn', createdAt: '2018-04-14'},
        {id: 7, title: 'Document 7', requester: 'User 3', state: 'Processed', createdAt: '2018-04-13'}
    ];

    self.requests = [
        {id: 100, title: 'Document 1', requester: 'User 2', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-05'},
        {id: 101, title: 'Document 2', requester: 'User 3', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-06'},
        {id: 102, title: 'Document 3', requester: 'User 4', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-07'},
        {id: 103, title: 'Document 4', requester: 'User 2', action: 'Approval Request', state: 'Cancelled', submittedDate: '2019-04-08'},
        {id: 104, title: 'Document 5', requester: 'User 3', action: 'Approval Request', state: 'Processed', submittedDate: '2019-04-09'},
        {id: 105, title: 'Document 6', requester: 'User 4', action: 'Approval Request', state: 'Submitted', submittedDate: '2019-04-05'},
        {id: 106, title: 'Document 7', requester: 'User 5', action: 'Approval Request', state: 'Cancelled', submittedDate: '2019-04-06'},
        {id: 107, title: 'Document 8', requester: 'User 2', action: 'Approval Request', state: 'Processed', submittedDate: '2019-04-07'},
        {id: 108, title: 'Document 9', requester: 'User 3', action: 'Approval Request', state: 'Expired', submittedDate: '2019-04-08'},
        {id: 109, title: 'Document 10', requester: 'User 4', action: 'Approval Request', state: 'Cancelled', submittedDate: '2019-04-09'},
        {id: 110, title: 'Document 11', requester: 'User 5', action: 'Approval Request', state: 'Processed', submittedDate: '2019-04-10'}
    ];

    self.recentDocuments = (num) => {
        return self.documents.slice(0, num);
    };

    self.recentRequests = (num) => {
        return self.requests.slice(0, num);
    };
});

