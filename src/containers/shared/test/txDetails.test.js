import React from 'react'
import { mount } from 'enzyme'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'
import i18n from '../../../i18nTestConfig'
import AccountSet from '../../Transactions/test/mock_data/AccountSet.json'
import EnableAmendment from '../../Transactions/test/mock_data/EnableAmendment.json'
import PaymentChannelClaim from '../../Transactions/test/mock_data/PaymentChannelClaim.json'
import PaymentChannelCreate from '../../Transactions/test/mock_data/PaymentChannelCreate.json'
import PaymentChannelFund from '../../Transactions/test/mock_data/PaymentChannelFund.json'
import TrustSet from '../../Transactions/test/mock_data/TrustSet.json'
import UNLModify from '../../Transactions/test/mock_data/UNLModify.json'
import TxDetails from '../components/TxDetails'
import summarize from '../../../rippled/lib/txSummary'

describe('TxDetails', () => {
  const createWrapper = (tx) =>
    mount(
      <Router>
        <I18nextProvider i18n={i18n}>
          <TxDetails
            t={(s) => s}
            language="en-US"
            instructions={summarize(tx, true).details.instructions}
            type={tx.tx.TransactionType}
          />
        </I18nextProvider>
      </Router>,
    )

  it('renders AccountSet without crashing', () => {
    const wrapper = createWrapper(AccountSet)
    wrapper.unmount()
  })

  it('renders EnableAmendment without crashing', () => {
    const wrapper = createWrapper(EnableAmendment)
    wrapper.unmount()
  })

  it('renders PaymentChannelCreate without crashing', () => {
    const wrapper = createWrapper(PaymentChannelCreate)
    wrapper.unmount()
  })

  it('renders PaymentChannelFund without crashing', () => {
    const wrapper = createWrapper(PaymentChannelFund)
    wrapper.unmount()
  })

  it('renders PaymentChannelClaim without crashing', () => {
    const wrapper = createWrapper(PaymentChannelClaim)
    wrapper.unmount()
  })

  it('renders TrustSet without crashing', () => {
    const wrapper = createWrapper(TrustSet)
    wrapper.unmount()
  })

  it('renders UNLModify without crashing', () => {
    const wrapper = createWrapper(UNLModify)
    wrapper.unmount()
  })
})
