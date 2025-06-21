import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


export default function ResumePreview({ formData }) {

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
    <div>
      {/* 如果 formData.email有值，就会显示这个邮箱地址
       null、undefined 或""，就会显示默认值邮箱
       || 常用于数据未填写时显示默认值 */}
      <h2>{formData.name || '姓名'}</h2>
      <p>{formData.email || '邮箱'}</p>
      <h4>教育经历</h4>
      <p>{formData.education || '请填写你的教育经历...'}</p>
      <h4>专业技能</h4>
      <p>{formData.skill || '请填写你的专业技能...'}</p>
      <h4>校内经历</h4>
      <p>{formData.campusExperience || '请填写你的校内经历...'}</p>
      <h4>项目经历</h4>
      <p>{formData.projects || '请填写你的项目经历...'}</p>
      <h4>社会实践</h4>
      <p>{formData.socialPractice || '请填写你的社会实践...'}</p>
      <h4>实习经历</h4>
      <p>{formData.internships || '请填写你的实习经历..'}</p>
      <h4>奖项荣誉</h4>
      <p>{formData.awards || '请填写你的奖项荣誉...'}</p>
      <h4>自我评价</h4>
      <p>{formData.selfIntro || '请填写你的自我评价...'}</p>
      <button onClick={exportPDF}>
        导出 PDF
      </button>
    </div>
  )
}