export default function ResumeForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // formData 就像是一个电子表格，
      // 专门用来记录表单里填写的所有内容：
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <div style={{ marginLeft: '50px', marginTop: '50px' }}>
        <div className="mb-3">
          <label className="form-label">姓名:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">邮箱:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">教育经历:</label>
          <input
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">专业技能:</label>
          <input
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">校内经历:</label>
          <input
            name="campusExperience"
            value={formData.campusExperience}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">项目经历:</label>
          <input
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">社会实践:</label>
          <input
            name="socialPractice"
            value={formData.socialPractice}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">实习经历:</label>
          <input
            name="internships"
            value={formData.internships}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">奖项荣誉:</label>
          <input
            name="awards"
            value={formData.awards}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">自我评价:</label>
          <input
            name="selfIntro"
            value={formData.selfIntro}
            onChange={handleChange}
            className="form-control"
          />
        </div>

      </div>
    </form>
  )

}