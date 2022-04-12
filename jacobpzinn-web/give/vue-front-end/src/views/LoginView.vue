<template>
  <main id="login-main" class="flex">
            <div class="content flex">

                <div class="login-container">
                    <img class="login-bg" src="../assets/color-bg.png" alt="background image">
                    <div class="login-form-container flex">
                        <div class="login-form flex">
                            <h1>login</h1>
                            <form action="/action_page.php">
                                <label for="fname">first name:</label>
                                <input type="text" id="fname" class="login-input" name="fname"><br><br>
                                <label for="lname">last name:</label>
                                <input type="text" id="lname" class="login-input" name="lname"><br><br>
                                <label for="lname">email:</label>
                                <input type="email" id="lname" class="login-input" name="email"><br><br>
                                <input type="submit" class="button" value="Submit">
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </main>
</template>

<style scoped>

#login-main {
  width: 100%;
  height: 100%;
  flex-grow: 1;
}

.login-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.login-bg {
  position: absolute;
  inset: 0 0 0 0;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-container::after {
  position: absolute;
  height: 100%;
  border-radius: 1rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  top: 0;
  left: 0;
  display: block;
  content: "";
}

.login-form-container {
  position: absolute;
  inset: 0 0 0 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.login-form {
  justify-content: center;
  flex-direction: column;
}

.login-input {
  background-color: transparent;
  border-radius: 1rem;
  border: 1px var(--dark-gray) solid;
  padding: 0 0.5rem;
}

.login-input:focus-within {
  outline-color: var(--primary);
}

.login-input:focus-within,
.login-input:hover {
  box-shadow: 1px 1px 8px 1px var(--light-gray);
}

.login-form .button {
  border-color: black;
  color: black;
  padding: 0.1rem 0.5rem;
}
</style>