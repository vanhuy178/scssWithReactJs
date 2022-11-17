### FEARTURE OF SASS

# Variables in sass
- $primary-color: #24a0ed;
# Nestings in sass
- nav {
    ul {
        li{
            a {
                &:...{

                }
            }
        }
    }
}
# Parent Selector
- notice the ampersand symbol & this is called parent selector to refer to the outer selector.

# Partials in Sass
- To declare a partial
- We will start the file name an underscore _
- add it in antother sass file using the @import directive
- Example: 
    - _global.scss
    - _variables.scss
    - _buttons.scss
    * import it in another file:
        - @use "global"
        - @use "button"
# Mixins in Sass
- Mixins allow you to encasulate a group of styles, and apply those styles anywhere in your code using @include keyword.

- Exampe: 
    @mixin flex-container {
        display: flex;
        justify-content: space-around;
        aligh-items: center;
        flex-direction: column;
        background: #ccc
    }

    .card {
        @include flex-container
    }
    .aside {
        @include flex-container
    }