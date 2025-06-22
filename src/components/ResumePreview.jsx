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
       || 常用于数据未填写时显示默认值 
        内边距16px（上下左右），1px灰色边框，圆角4px，轻微阴影，白色背景*/}
      <div id='resume-preview' className='p-4 border rounded shadow bg-white' style={{ maxWidth: '700px', margin: '0 auto' }}>

        <h2 className='fw-bold border-buttom pd-2'>{formData.name || '姓名'}</h2>
        <p>{formData.email || '邮箱'}</p>
        <h4 className='mt-3 fw-bold'>🎓 教育经历</h4>
        <p>{formData.education || '请填写...'}</p>
        <h4 className='mt-3 fw-bold'>🛠️ 专业技能</h4>
        <p>{formData.skill || '请填写...'}</p>
        <h4 className='mt-3 fw-bold'>🏫 校内经历</h4>
        <p>{formData.campusExperience || '请填写...'}</p>
        <h4 className='mt-3 fw-bold'>💻 项目经历</h4>
        <p>{formData.projects || '请填写...'}</p>
        <h4 className='mt-3 fw-bold'>🌏 社会实践</h4>
        <p>{formData.socialPractice || '请填写...'}</p>
        <h4 className='mt-3 fw-bold'>🏢 实习经历</h4>
        <p>{formData.internships || '请填写..'}</p>
        <h4 className='mt-3 fw-bold'>🏅 奖项荣誉</h4>
        <p>{formData.awards || '请填写...'}</p>
        <h4 className='mt-3 fw-bold'>📝 自我评价</h4>
        <p>{formData.selfIntro || '请填写...'}</p>
      </div>

      <button onClick={exportPDF}>
        导出 PDF
      </button>
    </div>
  )
}