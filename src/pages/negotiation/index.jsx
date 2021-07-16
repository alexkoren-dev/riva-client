import React, { useState } from 'react'
import { Card, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { NegotiationQuestion } from '@/component/Negotiation'
import { NEGOTIATION_QUESTIONS } from '@/constants'
import Typed from 'react-typed'
import './style.less'

String.prototype.format = function () {
  var formatted = this
  for (var arg in arguments) {
    formatted = formatted.replace('{' + arg + '}', arguments[arg])
  }
  return formatted
}

const NegotiationAsk = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [scripts, setScripts] = useState([])

  const onNext = (field, value) => {
    if (activeQuestion < NEGOTIATION_QUESTIONS.length - 1) {
      // Set Scripts
      if (scripts[activeQuestion]) {
        let newScripts = Object.assign([], scripts)
        newScripts[activeQuestion] =
          NEGOTIATION_QUESTIONS[activeQuestion + 1].script.format(value)
        setScripts(newScripts)
      } else
        setScripts([
          ...scripts,
          NEGOTIATION_QUESTIONS[activeQuestion + 1].script.format(value)
        ])

      setActiveQuestion(activeQuestion + 1)
      setAnswers({ ...answers, [field]: value })
      console.log(scripts)
    }
  }

  const onPrev = () => {
    if (activeQuestion > 0) setActiveQuestion(activeQuestion - 1)
  }

  return (
    <div className="negotiation-ask-page">
      <Card>
        {scripts.map((sc, i) => (
          <Typed
            key={sc || i}
            strings={[sc]}
            showCursor={false}
            smartBackspace={true}
            typeSpeed={20}
          />
        ))}

        {NEGOTIATION_QUESTIONS.map((question, i) => (
          <NegotiationQuestion
            key={i}
            visible={activeQuestion === i}
            onNext={onNext}
            initialValue={
              answers[NEGOTIATION_QUESTIONS[activeQuestion]['fieldName']]
            }
            loading={false}
            question={question}
          />
        ))}
        <div>
          {activeQuestion > 0 && (
            <Button type="default" className="btn-back" onClick={onPrev}>
              <ArrowLeftOutlined /> Back
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}

export default NegotiationAsk
