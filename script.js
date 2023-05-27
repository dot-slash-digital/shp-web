const faqQuestions = [
  {
    question: "Why therapy?",
    answer: [
      "Friends and family don’t always have the knowledge and advice to help one overcome life’s challenges. Therapists can provide a professional opinion and a safe environment to resolve difficult personal issues.",
    ],
  },
  {
    question: "What can therapy help with?",
    answer: [
      "Therapy can help a variety of aspects. Some ways that I’ve helped previous clients include:",
      [
        "Improving mood",
        "Reducing reactivity/anger",
        "Reduction of stress",
        "Reduction of anxiety/panic symptoms",
        "Improving communication and conflict resolution in relationships",
        [
          "Facilitate increased understanding of maladaptive learned behaviors such as:",
          [
            "People pleasing",
            "Improving self-worth",
            "Reduction of feelings of shame",
          ],
        ],
        "Teaching positive/healthy coping strategies versus unhealthy coping strategies (like alcohol, drugs, gambling, etc.)",
      ],
    ],
  },
  {
    question: "What are the most common issues that you help people with?",
    answer: [
      "Anxiety-related disorders, stress, childhood trauma and relationships, and mood disorders. Please reach out via the contact form if you have questions on specific issues you would like to address.",
    ],
  },
  {
    question: "How many sessions are required?",
    answer: [
      "There is no required amount of sessions. Dr. Hood's recommended approach is to set therapy goals and continue sessions until those goals are met.",
    ],
  },
  {
    question: "Do you offer in-person therapy sessions?",
    answer: [
      "All sessions are online via Zoom, to provide you with the flexibility and freedom to join therapy from anywhere at any time.",
    ],
  },
  {
    question: "How do I pay for a session?",
    answer: [
      "All costs and fees are collected via Zelle or credit card at the end of each session.",
    ],
  },
  {
    question:
      "How long should I expect to wait after reaching out to hear back?",
    answer: [
      "Dr. Hood will respond promptly to all questions and appointment inquiries, typically within 24 hours.",
    ],
  },
];

$(document).ready(function () {
  populateFaqQuestions();
  faqQuestionAndNavbarBehavior();
});

function populateFaqQuestions() {
  const questionsWrapper = $(".content.faq .questions");
  faqQuestions.forEach((faqQuestion) => {
    const questionBottom = document.createElement("div");
    questionBottom.className = "bottom";
    faqQuestion.answer.forEach((answer) => {
      if (Array.isArray(answer) === false) {
        const answerText = document.createElement("div");
        answerText.className = "body-copy";
        answerText.innerHTML = answer;
        questionBottom.append(answerText);
      } else {
        const bullets = document.createElement("ul");
        answer.forEach((bullet) => {
          if (Array.isArray(bullet) === false) {
            const bulletText = document.createElement("li");
            bulletText.className = "body-copy";
            bulletText.innerHTML = bullet;
            bullets.append(bulletText);
          } else {
            const bulletText = document.createElement("li");
            bulletText.innerHTML = bullet[0];
            bulletText.className = "body-copy";
            bullets.append(bulletText);
            const subBullets = document.createElement("ul");
            bullet[1].forEach((subBullet) => {
              const subBulletText = document.createElement("li");
              subBulletText.className = "body-copy";
              subBulletText.innerHTML = subBullet;
              subBullets.append(subBulletText);
            });
            bullets.append(subBullets);
          }
        });
        questionBottom.append(bullets);
      }
    });
    const questionGroup = document.createElement("div");
    questionGroup.className = "question";
    const questionTop = document.createElement("div");
    questionTop.className = "top";
    const questionTopHeader = document.createElement("div");
    questionTopHeader.className = "header-3";
    questionTopHeader.innerHTML = faqQuestion.question;
    questionTop.append(questionTopHeader);
    const questionTopButton = document.createElement("div");
    questionTopButton.className = "button";
    questionTop.append(questionTopButton);
    questionGroup.append(questionTop);
    questionGroup.append(questionBottom);
    questionsWrapper.append(questionGroup);
  });
}

$(document).on("click", ".content.faq .questions .question", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(".content.faq .questions .question").removeClass("open");
    $(this).addClass("open");
  }
});

function faqQuestionAndNavbarBehavior() {
  $(".content.faq .questions .question").each(function (index) {
    const topHeight = $(this).children(".top").outerHeight();
    const bottomHeight = $(this).children(".bottom").outerHeight();
    if ($(this).hasClass("open")) {
      $(this).css({ height: `${topHeight + bottomHeight}px` });
    } else {
      $(this).css({ height: `${topHeight}px` });
    }
  });

  const openHeight =
    $(".content.navbar").outerHeight() +
    $(".content.navbar .right-column").outerHeight() +
    32;
  const closedHeight = $(".content.navbar").outerHeight();

  if ($(".section.navbar").hasClass("open")) {
    $(".section.navbar").css({ height: `${openHeight}px` });
  } else {
    $(".section.navbar").css({ height: `${closedHeight}px` });
  }

  window.requestAnimationFrame(faqQuestionAndNavbarBehavior);
}

$(document).on("click", ".content.navbar .hamburger-menu", function () {
  $(".section.navbar").toggleClass("open");
});

$(document).on("click", ".content.navbar .right-column a", function () {
  $(".section.navbar").removeClass("open");
});

$(window).resize(function () {
  $(".section.navbar").removeClass("open");
});
