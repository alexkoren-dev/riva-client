// Redux Type Constants
export const COMMON = {
  TOP_ALERT: 'TOP_ALERT',
  CHOOSE_BG: 'CHOOSE_BG',
  CLEAR_ALERT: 'CLEAR_ALERT'
}

export const AUTH = {
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
  USER_PROFILE: 'USER_PROFILE',
  USER_INFO: 'USER_INFO',
  UPDATE_USER: 'UPDATE_USER',
  BACKGROUND_IMAGE_UPLOAD: 'BACKGROUND_IMAGE_UPLOAD',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const COMPENSATION = {
  USER_COMPENSATION: 'USER_COMPENSATION',
  OFFERED_COMPENSATION: 'OFFERED_COMPENSATION',
  FETCH_COMPENSATION: 'FETCH_COMPENSATION',
  COMPENSATION_PERCENTILE: 'COMPENSATION_PERCENTILE',
  UPDATE_COMPENSATION: 'UPDATE_COMPENSATION',
  CLEAR_COMPENSATION: 'CLEAR_COMPENSATION'
}

export const COMMON_VALIDATE_MESSAGES = {
  required: 'Please enter ${label}',
  types: {
    email: 'Please enter a valid ${label}'
  },
  string: {
    min: '${label} must be at least 6 characters long'
  }
}

export const NEGOTIATION_QUESTIONS = [
  {
    no: 1,
    title:
      'Let’s figure out your negotiations ask. Tell us about your new offer. Let’s start with the company:',
    inputType: 'text',
    fieldName: 'company',
    script: ''
  },
  {
    title: 'What’s the name of the person you’re negotiating with?',
    inputType: 'text',
    fieldName: 'personToTalk',
    script: 'Hi '
  },
  {
    no: 2,
    title: 'How confident from a scale of 1-10 do you feel negotiating?',
    inputType: 'text',
    fieldName: 'confidenceLevel',
    script: '{0}, <br/><br/>'
  },
  {
    no: 3,
    title: 'How long have you been interviewing for?',
    inputType: 'text',
    fieldName: 'interviewLength',
    script: ''
  },
  {
    no: 4,
    title: ' When did you receive the offer?',
    inputType: 'text',
    fieldName: 'offerDate',
    script: ''
  },
  {
    no: 5,
    title: 'How excited are you about the company on a scale of 1-10?',
    inputType: 'text',
    fieldName: 'excitLevel',
    script:
      "I'm really excited to be speaking with you further about the offer. As I mentioned in my earlier email, I've spent a lot of time over the weekend reflecting on it, speaking with Max and friends, family, and mentors.<br/><br/>"
  },
  {
    no: 6,
    title: 'What do you want to negotiate?',
    inputType: 'text',
    fieldName: 'negotiationSubject',
    script:
      'Before I accept your offer, I wanted to discuss compensation and title. I wanted to put all my thoughts into an email and send them over to you. Of course, I would be happy to discuss this in real-time at any point - feel free to call or email me anytime.<br/><br/>'
  },
  {
    no: 8,
    title: 'How many years of experience do you have in a similar field?',
    inputType: 'text',
    fieldName: 'experience',
    script: ''
  },
  {
    no: 9,
    title: 'What is the role you’re entering?',
    inputType: 'text',
    fieldName: 'role',
    script: ''
  },
  {
    no: 9,
    title: 'What is the job title you’re entering?',
    inputType: 'text',
    fieldName: 'jobTitle',
    script: ''
  },
  {
    no: 10,
    title:
      'We’ll want to insert a sentence or two about your accomplishments here. We’ll come back to this at the end.',
    inputType: 'text',
    fieldName: 'accomplishments',
    script: ''
  },
  {
    no: 11,
    title: 'Why do you think you deserve more money?',
    inputType: 'text',
    fieldName: 'deserveReason',
    script:
      'As we discussed during the interviews, I have a decade of experience in marketing and product marketing and {0}. I completely understand the desire to keep compensation in check and am absolutely thrilled about the opportunity to join. That being said, I bring a bit more experience to the table than a typical Director and have demonstrated my abilities in [insert skills].<br/><br/>'
  },
  {
    no: 12,
    title:
      'Now, we’ll need to insert your negotiations ask. We’ll come back to this at the end.',
    inputType: 'text',
    fieldName: 'negotiationAsk',
    script: ''
  },
  {
    no: 13,
    title:
      'You mentioned you wanted to also negotiate Title. Let’s go ahead and do that. What’s the title you want?',
    inputType: 'text',
    fieldName: 'negotitationTitle',
    script: '{0}<br/><br/>'
  },
  {
    no: 14,
    title:
      'Title. Now this title, would that be a lateral move, an upwards move, or no relationship to your current job?',
    inputType: 'text',
    fieldName: 'relationShip',
    script: ''
  },
  {
    no: 15,
    title:
      'Now, if they met your negotiations ask, would you be 100% confident joining? Saying yes increases your chances of getting it. But if they meet it, you <strong>must</strong> accept.',
    inputType: 'text',
    fieldName: 'join',
    script:
      "I also wanted to communicate that career growth is significant to me and was wondering what latitude you would have for changing my title to a Senior Director level position. I'm currently a Director at a ~300+ person company and it would make it a lot easier for me to accept the position if I could show career growth and make this a great upwards move.<br/><br/>"
  },
  {
    no: 16,
    title: 'Finally, what is the best number for Mike to reach you at?',
    inputType: 'text',
    fieldName: 'phoneNumber',
    script:
      "If we're able to find movement on both these things, I'd be 100% confident in signing the offer. <br/><br/>I'm looking forward to talking through this with you and answering any questions you may have. I see this as the start of an exciting journey, so want to make sure this is something we're both comfortable and excited about.<br/><br/>"
  },
  {
    no: 17,
    title:
      'Now go back and fix any component of this email you might not feel comfortable with. If this email reads too aggressive or too soft, select your option below and we’ll regenerate a new version.',
    inputType: 'text',
    fieldName: 'email',
    script:
      'I can be reached at {0}, please feel free to give me a call anytime! <br/><br/>Thank you again,<br/>Fernanda'
  },
  {
    no: 18,
    title:
      'Now let’s go back and fill in accomplishments and skills. Want to see some examples. <a>Click here.</a>',
    inputType: 'text',
    fieldName: 'company',
    script: ''
  }
]

export const NEGOTIATION_SCRIPTS = {}
