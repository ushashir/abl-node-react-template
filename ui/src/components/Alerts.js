import React, {useContext} from 'react';
import AlertContext from '../ContextAPIs/alert/alertContext';


const Alerts = () => {
  const alertContext = useContext(AlertContext)

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <section className='page-section'>
          <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-into-circle' /> {alert.message}
      </div>
      </section>
    ))
  )
}

export default Alerts;
