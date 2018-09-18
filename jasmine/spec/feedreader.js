/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/*@description We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* @description a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined and URL not empty', () => {
            allFeeds.forEach((each) => {
            //	console.log(each.url.length);
                expect(each.url).toBeDefined();
                expect(each.url).not.toBeNull();
                expect(each.url.length).not.toBe(0);
            });
        });


        /* @description Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined and name not empty', () => {
            allFeeds.forEach((each) => {
                expect(each.name).not.toBeNull();
                expect(each.name).toBeDefined();
             //   console.log(each.name.length);
                expect(each.name.length).not.toBe(0);
            });
        });
    });


    /* @description Write a new test suite named "The menu" */
    describe('The menu', () => {

        /* @description Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('menu element is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

        /* @description Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggle menu visibility', () => {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* @description Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {


        /* @description Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });


        it('test loadFeed()', () => {

            expect($('.feed .entry').length).not.toBe(0);

        });

    });
    /* @description Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', () => {

        var feedListInitial;

        /* @description Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


        beforeEach(function(done) {
            //load the feed for the first index
            loadFeed(0, function(){
            	feedListInitial = $('.entry').text();
            	//console.log(feedListInitial);	
            });
    
            //load the feed for the second index and return a callback param done
            loadFeed(1, done);
        });

        it('content actually changes', () => {
            //compare the h2 values of both the feeds 
            // console.log(feedListInitial)
            // console.log($('.entry').text());
            expect(($('.entry').text()) == feedListInitial).toBe(false);
            

        });

    });

}());