import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import TemplateOne from './TemplateOne'
import TemplateTwo from './TemplateTwo'

const Templates = {
  one: TemplateOne,
  two: TemplateTwo,
}

export default function ResumePreview({ formData }) {
  const [selectedTemplate, setSelectedTemplate] = useState('one')
  const TemplateComponent = Templates[selectedTemplate]

  const exportPDF = () => {
    const input = document.getElementById('resume-preview')

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('resume.pdf')
    })
  }

  return (

    <div className='card p-4 shadow-lg'>

      <div className='mb-3'>
        <label>选择模板：</label>
        <select
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
        >
          <option value="one">模板一</option>
          <option value="two">模板二</option>
        </select>
      </div>
      {/* 绑定id，导出时用 */}
      <div id="resume-preview" className='border p-4 bg-white'>
        <TemplateComponent data={formData} />
      </div>

      <button className='btn btn-primary mt-3' onClick={exportPDF}>
        导出 PDF
      </button>
    </div>
  )
}
