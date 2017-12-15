# Personal Bio Site

1. [Step 1](#step-1)
1. [Step 2](#step-2)
1. [Step 3](#step-3)
1. [Step 4](#step-4)
1. [Step 5](#step-5)
1. [Step 6](#step-6)
1. [Step 7](#step-7)
1. [Step 8](#step-8)
1. [Step 9](#step-9)

---

<a id="step-1"></a>

## :white_check_mark: Step 1 Requirements

Create a two-page site for your own personal branding. As we continue through the front-end milestones, we will add more features to this site, and it will eventually evolve into your personal portfolio site to share with employers. For now, focus on the structure of your HTML.

### Pages

#### Professional history page

Basically an HTML version of your resume.

1. [x] Each place you've worked must be contained in an `article` element.
1. [x] Each article should have a header that contains the name of the company and the dates of your employment. 
1. [x] Each article should contain at least one `section` that describes your position there.
1. [x] No `footer` required for these articles.

#### Contact information page

1. [x] One article.
1. [x] A heading (e.g. "How to contact me").
1. [x] Four sections that contain an email address, GitHub link and two social media URLs. (Bonus points if you use images to link to each of these). 

### Common page elements

- [x] Navigation
  - Create a navigation bar on each page that contains a link to both pages. You can use whatever elements you like for the navigation, but it must be contained in the appropriate HTML5 semantic element.
- [x] Page header
  - Each page should have an `<h1>` title contained in the appropriate HTML5 semantic tag.
- [x] Page footer
  - Each page should have the same footer information. Put whatever information you like in the footer.

---

<a id="step-2"></a>

## :white_check_mark: Step 2 Requirements

- [x] Create 2 new HTML pages: Projects and About Me
- [x] Add links to these 2 new pages to your existing navigation bar.

Update your navigation bar with the following interactivity:

- [x] When the user hovers over one of the links, the color of the text should change.
- [x] When the user hovers over one of the links, the background color of the element that contains the link should change.
- [x] When the user clicks on one of the links, the element that contains the link should grow in size by 5px on the left and right.

---

<a id="step-3"></a>

## :white_check_mark: Step 3 Requirents

1. [x] Create 1 new HTML page: Blog
1. [x] Add a link to this blog page in your existing navigation.
1. [x] Create at least 5 blog entry "cards" for now. Each card should have:
  - [x] A header section containing an H4 title and the date the blog was written.
  - [x] A content section containing your body of text.
    - These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course._
1. [x] Your page should follow [this mockup](https://github.com/nss-day-cohort-23/personal-site-instructions/raw/master/images/BlogArticleExercise.png). Use Flexbox to achieve this:

---

<a id="step-4"></a>

## :white_check_mark: Step 4 Requirements

1. [x] Create `main.js` and link to it in `blog.html`
1. [x] Create an html element with the id `blog-holder`
1. [x] Make an array called `blogs`
1. [x] Add each of your existing blogs to the blogs array by making them into objects with the following key, value pairs: title, content, date  (you should have at least 5 blog objects)
1. [x] Loop over the blogs array and build up the HTML card elements using the values from your blog objects
1. [x] Add the HTML you created in the last step to the `#blog-holder` element

### Final Result
* HTML File: 
	* navbar
	* `#blog-holder` element
* JS File
	* An array with 5 blog objects
	* variable that stores DOM container element
	* Loop that iterates over the array, builds up a string, and then puts the string on the DOM

---

<a id="step-5"></a>

## :white_check_mark: Step 5 Requirements

1. [x] Create a JSON file that contains all the information for your blog posts (`blog-posts.json`) &mdash; hopefully you've been keeping up with it :wink:. Validate your JSON file.
1. [x] Create an XHR to load the data from your local json file. 
1. [x] Loop over the blogs array returned from your XHR and build up the HTML card elements using the values from your blog objects.
1. [x] Add the HTML you created in the last step to the `#blog-holder` element.

### Final Result
* HTML File: 
	* no change
* JS File
	* XHR now returns an array
	* Loop that iterates over the array, builds up a string, and then puts the string on the DOM (from previous exercise).

---

<a id="step-6"></a>

## :white_check_mark: Step 6 Requirements

- [x] Grid System: Use the grid system to display your blog entries. You should have 3 blog articles per row.
- [x] Bootstrap Nav Bar: Should contain 3 elements: 
    - [x] Your "Logo" or personal bio site title
    - [x] Input bar to search your blog posts (Logic specs for this in a later step).
        - *Note: This should **only be visible** from the Nav Bar on your Blog Page.*
    - [x] All of the links to your other pages on your website
- [x] Blog Page
    - [x] The elements on this page should utilize the full width of the screen.
    - [x] Update each of your blog posts so they all have a set height. Cut off any of the text that expands beyond the set height using some CSS. (Hint: checkout the overflow property).
    - [x] Whenever the user clicks on a specific blog post card, that blog should appear in a special div (that spans all 12 columns) above all of the blog posts and should show the full content of the blog. When the user clicks on another blog post, it should replace the content of this special div with the content of the new blog post the user selected.

### **Bonus**: Search

- [x] Whenever the user types in the search bar, it should filter the blog posts.
    - Example: The user types in "abou", the only remaining blog cards showing should be ones where your content contains the string "abou" somewhere. 
- [ ] Add an array of tags to each of your blog post entries. These can be displayed on the card or not, your choice.
    - [ ] Make it so the search function only applies to these tags.
    - Example: The user types in "func", the only remaining blog cards showing should be ones where your tags array contains the string "func" at some index in the array.


### Final Result
![Blog Jumbo](https://github.com/nss-day-cohort-23/personal-site-instructions/raw/master/images/Blog_Jumbo.gif)

---

<a id="step-7"></a>

## Step 7 Requirements

1. [ ] ES6-ify your entire personal site. No more `var`. Fat Arrow (`=>`) functions anywhere you can use them. String template literals (`${}`).

---

<a id="step-8"></a>

## Step 8 Requirements

- [ ] Add jQuery to your project for any DOM manipulation.  
- [ ] None of the following should exist any longer in your project:
    * [ ] `document.getElementById`
    * [ ] `XHRHttpRequest`
    * [ ] `addEventListener`
    * [ ] `parentNode`
    * [ ] `childNode`
    * [ ] `siblingNode`
    * [ ] any other DOM traversal with the word node
- [ ] You should make use of jQuery things like:
    * [ ] `$.get`
    * [ ] `.click`
    * [ ] `.children`
    * [ ] `.parent`
    * [ ] `.sibling`
    * [ ] any other methods that strike your fancy

---

<a id="step-9"></a>

## Step 9 Requirements

1. [x] Add SASS to your project for all styling.  You will need to change your Gruntfile and add an NPM package.
2. [x] None of the following should exist in your project:
  - [x] Hex colors (except in variable definitions)
  - [x] Lots of repetitive CSS &mdash; if classes share the same properties, you should define that in one place and extend where needed
  - [x] defining the class each time for different pseudoclasses
    - Ex. having a `.card` and a `.card:hover` - use SASS nesting
1. [x] You should make use of SASS things like:
  - [x] Variables for colors
  - [ ] Extend common style 
  - [x] Nest your classes 