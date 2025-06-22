import { useEffect, useState } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

function App() {
  // 浏览器的内置存储空间，getitem从存储中取出名为"resumeData"的东西，
  // const storedData = - 把取出的东西赋值给变量storedData
  const storedData = localStorage.getItem('resumeData')
  const [formData, setFormData] = useState(
    // storeddata如果存在，就把字符串转化为对象，
    // 把{"name":"小明"}字符串，变成真正的JS对象{name:"小明"}
    storedData ? JSON.parse(storedData) : {
      name: '', email: '', education: '', skill: '', campusExperience: '', projects: '', socialPractice: '', internships: '', awards: '', selfIntro: ''
    })
  // JSON.stringify把 JS对象或值转换成JSON字符串格式，
  // localStorage（只能存字符串，不能直接存对象）才能运输和存储
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(formData))
  }, [formData])

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