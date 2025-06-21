import { useState } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    skill: '',
    campusExperience: '',
    projects: '',
    socialPractice: '',
    internships: '',
    awards: '',
    selfIntro: ''
  })


  return (
    <div>
      <h1>在线简历生成器</h1>
      <div style={{ display: 'flex', gap: '200px' }}>
        <div>
          <ResumeForm
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div>
          <ResumePreview
            formData={formData}
          />
        </div>
      </div>
    </div>
  )
}
export default App