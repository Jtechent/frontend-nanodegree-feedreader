/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
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


        function testAllFeedsProp(prop) {
            //loops through all the elements of the all feeds array and checks if some property is defined and
            //equal to the correct value
            it('each feed has a ' + prop + ' property', function() {
                for (var i = 0; i < allFeeds.length; i++) {
                    expect(allFeeds[i][prop]).toBeDefined();
                    expect(allFeeds[i][prop]).not.toEqual('');
                }
            });
        }

        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */



        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        testAllFeedsProp('url');
        testAllFeedsProp('name');


    });


    /*  Write a new test suite named "The menu" */
    describe('The menu', function() {

        /*  Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        var icon = document.querySelector('.menu-icon-link');



        it('be hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

        /*  Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu should slide out when icon is clicked', function() {
            icon.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            icon.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });


    });

    /*  Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /*  Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loads entries into the feed container when loadFeed is called', function(done) {
            expect(document.querySelector('.feed .entry')).not.toEqual(null);
            done();
        });

        /*  Write a new test suite named "New Feed Selection"

            /*  Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
    });

    describe('New Feed Selection', function() {
        //gives the ability to save the state of some entry-link content
        var firstContent = {
            content: ''
        };
        var getFirstContent = (function() {
            var content = firstContent;
            var tbr = function() {
                firstContent.content = document.querySelector('.entry-link').textContent;
            }
            return tbr;
        })();
        beforeEach(function(done) {
            //load a feed, get the content, load it again and check it again, call done
            loadFeed(1, function() {
                getFirstContent();
                loadFeed(0, function() {
                    done()
                });
            });
        });

        it('should actually change the feed content after loading a new feed', function(done) {
            var foundContent = document.querySelector('.entry-link').textContent;
            expect(foundContent).not.toEqual(firstContent.content);
            done();
        });

    });

}());
