export default function TemplateOne({ data }) {
  return (
    <div
      id='resume-preview'
      style={{
        width: '700px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: 'white',
        border: '20px solid rgb(186, 232, 255)',
        borderRadius: '8px'
      }}
    >
      {/* 个人信息头部 */}
      <div style={{
        paddingBottom: '16px',
        marginBottom: '24px',
        borderBottom: '1px dashed hsl(214, 95.30%, 41.60%)'
      }}>
        <h2 style={{
          fontWeight: '600',
          fontSize: '22px',
          marginBottom: '8px',
          color: '#333'
        }}>{data.name || '姓名'}</h2>

        <p style={{
          color: '#666',
          fontSize: '14px'
        }}>{data.email || '邮箱'}</p>

      </div>

      {/* 教育经历区块 */}
      <SectionBlock
        title="教育经历"
        content={data.education}
      />

      {/* 专业技能区块 */}
      <SectionBlock
        title="专业技能"
        content={data.skill}
      />

      {/* 校内经历区块 */}
      <SectionBlock
        title="校内经历"
        content={data.campusExperience}
      />

      {/* 项目经历区块 */}
      <SectionBlock
        title="项目经历"
        content={data.projects}
      />

      {/* 社会实践区块 */}
      <SectionBlock
        title="社会实践"
        content={data.socialPractice}
      />

      {/* 实习经历区块 */}
      <SectionBlock
        title="实习经历"
        content={data.internships}
      />

      {/* 奖项荣誉区块 */}
      <SectionBlock
        title="奖项荣誉"
        content={data.awards}
      />

      {/* 自我评价区块 */}
      <SectionBlock
        title="自我评价"
        content={data.selfIntro}
      />
    </div>
  )
}

// 可复用的区块组件
function SectionBlock({ title, content }) {
  return (
    <div style={{
      marginBottom: '20px',
      padding: '16px',
      border: '1px dashed hsl(214, 95.30%, 41.60%)',
      borderRadius: '4px'
    }}>
      <h4 style={{
        fontWeight: '600',
        fontSize: '16px',
        marginBottom: '12px',
        color: 'hsl(214, 95.30%, 41.60%)'
      }}>{title}</h4>
      <div style={{
        color: '#666',
        fontSize: '14px',
        lineHeight: '1.6',
        whiteSpace: 'pre-line'
      }}>
        {content || '无数据，点击添加 ' + title}
      </div>
    </div>
  )
}