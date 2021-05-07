# Subclass Dance Party #
_An exploration in polymorphism and inheritance._
> I was assigned this pair-programming project when I was a student at Hack Reactor.

## High Level Goals of this Sprint ##
* Master subclassing in JavaScript
* Use JavaScript, jQuery, and CSS to add unique effects to your application
* Be focused and deadline oriented around design choices

## What is polymorphism? ##
When constructing applications, it is often the case that you will need to construct objects that share common methods or traits. Dancers, for example, all display individual unique traits, however they also share the ability to dance, to stop dancing, and to line up. By creating dancers that are *subclasses* of a **`Dancer`** class, you can exhibit individuality while allowing your dancers to *inherit* useful methods from their *superclass*. This ability of the **`Dancer`** class to manifest in various *subclass* forms is *polymorphism*.

## Important Files ##
Note: To open the following html files in the browser, first run **`npm start`** in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:

```
Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx
```

Now, navigate to the **`http://127.0.0.1:xxxx`** link in your browser (don't forget to include the colon and extra numbers at the end), and open **`dancerfloor.html`** or **`SpecRunner.html`**.
  * **`dancefloor.html`** a dancer-indiscriminate stage.
  * **`src`** contains **`dancer.js`** and **`blinkyDancer.js`** with some code that you'll refactor and then extend with new types of dancers.
  * **`spec`** contains a few tests--you'll be adding more.
  * **`SpecRunner.html`** runs the tests.
  
## Understand ##
  * How **`dancefloor.html`**, **`src/init.js`**, **`src/dancer.js`**, and **`src/blinkyDancer.js`** relate.
  * Which CSS statements in **`styles.css`** make the dancers circular.
  
## Install Pomander ##
In Terminal, run the following command from within this repository:

```
curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash
```

[Pomander](https://github.com/reactorcore/pomander) will check your code for syntax errors and violations against the Hack Reactor style guide before each commit.

It uses a pre-commit hook to run staged files through **`eslint`** before each commit. **`eslint`** is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. Your work will be of a higher quality if you follow the instructions of the linter. That said, if the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the **`--no-verify`** option.

## Bare Minimum Requirements ##
Complete all the bare minimum requirements before moving on to the advanced content. This sprint gives you a substantial amount of creative freedom. We recommend that you read through all the requirements and hold a short planning session with your pair to discuss what your final product will be.
   - [ ] Complete **[Course] beesbeesbees**
   - [ ] Refactor the **`Dancer`** class and its subclass **`BlinkyDancer`** from functional inheritance to pseudoclassical.
         * Feel free to refer to the slide decks on Functional Subclasses & Pseudoclassical Subclasses
   - [ ] Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).
        * Add a link in the top bar of **`dancefloor.html`** to create a dancer of each new type you create
        * Write tests for new types. Use **`spec/blinkyDancerSpec.js`** as a template for new test files, and make sure to include them in **`SpecRunner.html`**.
   * Having trouble coming up ideas? Here are some example hierarchies:
        * [Dancer] > [PopDancer] > [RickAstleyDancer]
        * [Dancer] > [FightingDancer] > [ZangiefDancer]
        * [Dancer] > [BouncyDancer]
        * [Dancer] > [SuperHeroDancer] > [BatmanDancer]
   - [ ] Make your dancers visually distinct and adorable with CSS and JS! Don't skimp on the CSS here. It is a core tool everyone can benefit from additional experience with. Hack Reactor alumni frequently report getting CSS questions in interviews and knowledge requirements for their primarily JavaScript oriented jobs.
        * Changing colors!
        * Moving around the page!
        * Growing or shrinking in size!
        * Other shapes besides circles!
        * Rotation!
   - [ ] Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in **`src/init.js`**) so you can loop through that array and tell each object to **`lineUp`**. You'll need to add a **`lineUp`** method to each of your dancer types - they don't all have to do exactly the same thing.
   - [ ] Use an image (**`<img>`** tag or CSS **`background-image`**) instead of plain-jane RGB to add some pizazz!
   - [ ] Make dancers that interact with other dancers. For example, by iterating across the array **`window.dancers`** and using the Pythagorean Theorem to calculate your distance from each other dancer, you can have a dancer find its **`n`** closest neighbors and do something based on their positions.
   - [ ] Make a dancer that reacts to the mouse (use jQuery to add a **`mouseover`** handler).
   - [ ] Do any remaining work to make your dance party a presentable product. Take a screencast of it and post it on Slack.
    
### Tests ###
   - [ ] Go back and add at least two additional unit tests. If possible, try to add tests that will require you improve your implementation in order to make them pass.

## Example: ##
![image](https://user-images.githubusercontent.com/76498304/117389601-745aaf80-aea1-11eb-8801-995caa7e67d1.png)


