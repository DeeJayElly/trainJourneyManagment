## Your task ##

The attached code features a very simple web application, consisting
of a pure HTML/CSS/JS frontend and Ruby/Sinatra backend. It allows
adding up to 5 passengers to a train journey, on mobile devices.

It has been poorly written on purpose. Your task is to find and fix
as many problems with the code as you can find. The issues to be fixed
range from straight bugs, through potential problems with security
and accessibility, down to all kinds of poor engineering practices.

## What we're looking for ##

- The final code genis supposed to be free of bugs, intuitive for users,
  and follow all the best development practices.

- We want you to explain all the changes in your commit messages.

- Use `YOUR_NOTES.md` to write down any additional thoughts that you
  haven't implemented in code.

- Do not implement any new features or install any 3rd-party libraries,
  although you can mention any such ideas in your notes.

## Running the code ##

1. In a terminal, run the following code to install `bundler`:

    ```
    $ gem install bundler
    ```

2. In the project root directory, run the following commands
   to install dependencies and launch the backend:

    ```
    $ bundle install
    $ bundle exec ruby backend.rb
    ```

3. Open the `index.html` file in your mobile web browser

## Hints ##

In case you're not confident enough with Ruby, you can re-write
the backend code in another language of your choice. In such case,
please ensure the new code stays of roughtly the same size. Please
also include building & running instructions in `YOUR_NOTES.md`

