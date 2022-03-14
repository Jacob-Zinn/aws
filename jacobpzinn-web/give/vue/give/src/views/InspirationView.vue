<template>
  <main class="flex">
    <div class="content flex">
      <div class="hero">
        <img src="../assets/umbrella-man.png" alt="a man with umbrella" />

        <div id="inspiration-title-container">
          <div class="flex inspiration-title">
            <h1 class="text-white">The Umbrella Man</h1>
            <h4 class="text-white">Authored by Amy Zinn</h4>
          </div>
        </div>
      </div>
      <p id="story">
        There was a man who lived all his life in a sunny place. He grew up in
        this town where the sun always shined, where his hair was bleached by
        it, his skin browned by it. He went to school there, eventually brought
        up a family of his own there, lived out his life, and then . . . when he
        was good and old, after his wife passed and he could no longer care for
        himself on his own, he was forced to move to another part of the country
        to be with his only daughter. It was a cold and rainy place and the man
        didn't like that one bit.<br /><br />
        He would often sit by the window waiting for the sun to poke through the
        clouds. For days at a time, he would sit. And wait. And then . . . one
        day, it did. The rain stopped, the sun shone. He grabbed his cane and
        with a little hop to his step he went outside for a walk. His good
        fortune was short-lived, though, because while he was out, it started to
        rain again. Too far from home and grumbling, he quickly stopped in at
        the nearest drugstore to buy an umbrella. <br /><br />
        A little more stooped and already sopping, he was straggling home when,
        on his way he noticed school was letting out. A mother and a child
        scurried toward him from the opposite direction. The mother had a
        toddler swaddled in her own rain jacket, but no hood for herself, and
        the young one would rather stomp in puddles than keep up. As they got
        near, on impulse, the man thrust his umbrella at them. The mother
        stopped to look at him, and with the umbrella between them, they were
        all dripping wet now. She shook her head no, but the man pointed,
        explaining that he was nearly home already. She wondered how she would
        get the umbrella back to him, but he said, “Take it. It's yours.” And
        without a backward glance, he was on his way again, head bowed to the
        relentless rain.<br /><br />
        Back at home, the man's daughter met him at the door. “You're all wet,”
        she said, and immediately apologized like she always did, knowing how he
        hated the bad weather. As if she had any control over it.<br /><br />
        The next day, when there was a break in the drizzle, the man went for
        another walk, and this time he got a little further before the downpour
        began. He bought two umbrellas from a different store clerk. It wasn't
        hard to find someone without. In fact, he gave up his own umbrella like
        he had the day before and walked home, again, in the rain. <br /><br />
        This time when his daughter confronted him, he was wet, but smiling.<br /><br />
        It went on like this for months, years even. He became known as the
        umbrella man. He learned the people's names, their backstories. They
        would call out to him on the street, not because they were in need of an
        umbrella, but because he'd given them one before. He eventually had
        boxes of umbrellas mailed to his home so that he would have his
        stockpile ready before he even left the house.<br /><br />
        His daughter would often beg him, seeing him always as a sopping mess,
        “Surely you have enough umbrellas,” she'd say. “Keep one for yourself.”
        But always there was someone who needed it more. He traded even his cane
        in for an umbrella, then went hobbling home without, wanting only to be
        that little bit of shelter from someone else's storm.<br /><br />
        At the end of his life, his saddest days were the ones when the clouds
        never came, and the sun shone bright . . . <br /><br />
      </p>

      <div>
        <a href="../index.html"
          ><button class="button"><p>ready to give?</p></button></a
        >
      </div>
    </div>
  </main>
</template>


<script lang="ts">
export default {
};
</script>

<style scoped>
/* INSPIRATION CONTENT */

#inspiration-title-container {
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0 0 0 0;
  z-index: 2;
}

.inspiration-title {
  flex-direction: column;
  --gap: 0.5rem;
  justify-content: flex-end;
  z-index: 1;
  height: 100%;
  width: 100%;
  padding: 0 0 2rem 2rem;
}

#story {
  font-size: 1.1rem;
  margin-top: 1rem;
}

.hero {
  overflow: hidden;
  position: relative;
}

.hero img {
  width: 100%;
  object-fit: cover;
}
</style>