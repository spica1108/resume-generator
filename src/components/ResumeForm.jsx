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
      <div>
        <label>姓名:</label>
        {/* 让value输入框显示某个状态值，onchange让你能修改这个状态 */}
        <input name="name" value={formData.name} onChange={handleChange} />
        <hr />

        <label>邮箱:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        <hr />

        <label>教育经历:</label>
        <input name="education" value={formData.education} onChange={handleChange} />
        <hr />

        <label>专业技能:</label>
        <input name="skill" value={formData.skill} onChange={handleChange} />
        <hr />

        <label>校内经历:</label>
        <input name="campusExperience" value={formData.campusexperience} onChange={handleChange} />
        <hr />

        <label>项目经历:</label>
        <input name="projects" value={formData.projects} onChange={handleChange} />
        <hr />

        <label>社会实践:</label>
        <input name="socialPractice" value={formData.socialPractice} onChange={handleChange} />
        <hr />

        <label>实习经历:</label>
        <input name="internships" value={formData.internships} onChange={handleChange} />
        <hr />

        <label>奖项荣誉:</label>
        <input name="awards" value={formData.awards} onChange={handleChange} />
        <hr />

        <label>自我评价:</label>
        <input name="selfIntro" value={formData.selfIntro} onChange={handleChange} />
      </div>
    </form>
  )

}