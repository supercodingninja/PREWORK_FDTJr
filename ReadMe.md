Pseudo-codes for all aspects of the game, “Cat and Conquer”

// Game Format/Game Plot (Introduction to End Game) //
    1. Invasion
    A. Stupid Ugly Dogs on Earth working with Invaders (Villains: Rats)
    B. Ugly rats on Earth were alien invaders preparing for alien invasion, and destruction of Earth.
   2. Response
    A. Earth’s Dilemma (discovery of invaders)
    B. Earth’s Solution (recognition of cats heroic deeds and training centuries old)
   3. Lift Off
    A. Space Cats (Hero)
    B. Space Station Orbit .gif
    C. Flight or Fight
    4. End Game
    A. Game Over
    B. Rat Boss Game Over
    C. Level Won
    D. Medal of Honor
    E. Pause-to-Quit
    F. Pause-to-Break

// What are the rules of the game? //
    1. Movement
    A. Hero’s Movements: Strike the rat!
        i.   Users can move the cat left and right with the arrow keys.
        ii.  Users can press the spacebar to shoot a projectile.
        iii. If the player (Hero) shoots a mouse (Villain), the mouse is destroyed and deleted; and the player gets a point.
        iv. When there are no more Villains, the Hero wins the level; and proceeds to the next level/wins the game (if there are no more levels).

    B. Villains’ Movement
        i.  Dodge the cheese.
             a. Villain can approach the hero, from random locations, of the X and Y axises (horizontal and vertical movements along screen, including diangonal movements).
             b. If the Villain shoots the Hero, the the player (Hero) loses a life.
        ii. Do not let any rat pass.
             a. Mice fall from the sky at random locations.
             b. If a mouse reaches the bottom, the player loses a life.
        iii. Once a player reaches 0 life, they lose.
    2. Save planet Earth!
    A. Do not let the Villain pass/destroy Hero, and invade planet Earth!
    B.Do not let the Villain pass/destroy Hero, and blow planet Earth up!

// How does that translate into code? //
   1. Conditional statements are needed.
   2. Variables (Var) must be introduced; and properly scoped/identified.
   3. Parameters must be clear.
   4. Certain Var and functions may be repeated and/or copied.

// Will you need to use loops? If/else statements? //
    1. Loops are needed for weapons
    A. Villains’
    B. Hero’s
    2. If/else statements are needed for Weapons
    A. Villains’
        i.   Standard
        ii.  Upgrades
        iii. Strike/Miss
    B. Hero’s
        i.   Standard
        ii.  Upgrades
        iii. Strike/Miss
        iv.  Downgrade (loss of life)
    3. If/else statements are needed for Levels
    A. Completion
        i.   Standard Level
        ii.  Boss Level
        iii. Bonus Level
        iv.  Final Level (End Game)
    B. Incompletion
        i.   Standard Level
        ii.  Boss Level
        iii. Bonus Level
        iv.  Final Level (End Game)

// What variables will you need? //
    1. Hero (define)
    2. Villain(s) (define)
    A. Single
    B. Multiple Party
    C. Boss
    3. Weapons (define)
    A. Villain(s) (define)
        i.   Single
        ii.  Multiple Party
        iii. Boss
    B. Hero
        i.  Standard/initial
        ii. Upgrades

// Under what circumstances will your variables change? //
    1. Variables will change by result(s) of:
    A. Functions
    B. Loops
    C. Conditional Statements
    2. Variables    will change by re-assigning:
    A. Global Variable
    B. Local Variable
