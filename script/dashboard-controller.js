app.controller('dashboardController', function($location) {
    let self = this;

    self.currentPage = 'dashboard';
    self.pages = {
        dashboard: {
            title: 'Dashboard',
            subTitle: 'Manage Web Site'
        },
        documents: {
            title: 'Documents',
            subTitle: 'Manage Workflow Documents'
        },
        users: {
            title: 'Users',
            subTitle: 'Manage Users'
        },
        roles: {
            title: 'Roles',
            subTitle: 'Manage User Roles'
        },
        groups: {
            title: 'Groups',
            subTitle: 'Manage User Groups'
        },
        dataAccessGroups: {
            title: 'Data Access Groups',
            subTitle: 'Manage Data Access Groups'
        },
        workflow: {
            title: 'Workflow',
            subTitle: 'Manage Workflow Rule'
        },
        config: {
            title: 'Site Config',
            subTitle: 'Configure Site'
        }
    };

    self.subviewUrl = 'dashboard/dashboard-home.html';

    self.activeState = (page) => {
        if(page === self.currentPage) {
            return 'active';
        } else {
            return '';
        }
    };

    self.documents = [
        {id: 1, title: 'Document 1', requester: 'User 1', state: 'Submitted', createdAt: '2019-04-21'},
        {id: 2, title: 'Document 2', requester: 'User 2', state: 'Saved', createdAt: '2019-04-20'},
        {id: 3, title: 'Document 3', requester: 'User 2', state: 'Saved', createdAt: '2019-04-17'},
        {id: 4, title: 'Document 4', requester: 'User 5', state: 'Submitted', createdAt: '2019-04-17'},
        {id: 5, title: 'Document 5', requester: 'User 4', state: 'Submitted', createdAt: '2019-04-15'},
        {id: 6, title: 'Document 6', requester: 'User 3', state: 'Withdrawn', createdAt: '2018-04-14'},
        {id: 7, title: 'Document 7', requester: 'User 3', state: 'Processed', createdAt: '2018-04-13'}
    ];
    self.users = [
        {uniqueName: 'ktsubaki', name: 'Kazuo Tsubaki', email: 'kazz12211@gmail.com', joined: '2019-03-03'},
        {uniqueName: 'user1', name: 'User 1', email: 'user1@gmail.com', joined: '2019-03-08'},
        {uniqueName: 'user2', name: 'User 2', email: 'user2@gmail.com', joined: '2019-03-15'},
        {uniqueName: 'user3', name: 'User 3', email: 'user3@gmail.com', joined: '2019-03-25'},
        {uniqueName: 'user4', name: 'User 4', email: 'user4@gmail.com', joined: '2019-03-29'},
        {uniqueName: 'user5', name: 'User 5', email: 'user5@gmail.com', joined: '2019-04-03'}
    ];
    self.roles = [];
    self.groups = [];
    self.dataAccessGroups = [];

});