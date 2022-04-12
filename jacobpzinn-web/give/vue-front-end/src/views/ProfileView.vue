<template>
   <main id="profile-main" class="flex">
            <div class="content flex">

                <div class="profile-info-container flex">
                    <div class="profile-photo-container flex">
                        <div>
                            <img class="profile-photo" src="../assets/headshot.jpg" alt="profile photo">
                        </div>
                    </div>

                    <div class="profile-info flex">

                        <div class="flex flex-wrap">
                            <div class="flex">
                                <p class="field-title text-gray">first name:</p>
                                <p>Jacob</p>
                            </div>

                            <div class="flex">
                                <p class="field-title text-gray">last name:</p>
                                <p>Zinn</p>
                            </div>

                            <div class="flex">
                                <p class="field-title text-gray">email:</p>
                                <p>test@gmail.com</p>
                            </div>
                        </div>


                    </div>
                </div>

                <ul class="nav nav-tabs" id="messagesTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="nav-sent-tab" data-toggle="tab" href="#nav-sent" role="tab" aria-controls="pills-home" aria-selected="true">delivered</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-received-tab" data-toggle="tab" href="#nav-received" role="tab" aria-controls="pills-profile" aria-selected="false">received</a>
                    </li>
                </ul>
                <div class="tab-content" id="messagesTabContent">
                    <div class="tab-pane fade show active" id="nav-received" role="tabpanel">
                        <div class="message">
                            <p>
                                Hi Jacob,<br><br>I truly hope that you're having a great day. I remember you mentioning something about an audition today. Break a leg!<br><br>-your favorite grandma
                            </p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-sent" role="tabpanel">
                        <div class="message">
                            <p>
                                Blain,<br><br>I saw you're snowboarding video on instagram. Can't believe you sent a double! Let go again sometime soon.<br><br>-Jacob
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
</template>


<style scoped>
/* PROFILE */

#profile-main {
  width: 100%;
  height: 100%;
  flex-grow: 1;
}

.profile-info-container {
  flex-direction: column;
}

.profile-info {
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  margin-top: 1rem;
}

.profile-photo-container {
  width: 100%;
  justify-content: center;
}

.profile-photo {
  width: min(30vw, 30vh);
  object-fit: cover;
  border-radius: 100%;
}

.field-title {
  display: inline;
  font-size: 0.9rem;
  border-bottom: 1px var(--gray) solid;
}

.message {
  flex-direction: column;
  border: 1px solid var(--light-gray);
  border-radius: 0.7rem;
  margin: 1rem 0;
}

.message p {
  margin: 1rem 0.5rem;
}
</style>