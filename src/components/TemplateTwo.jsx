export default function TemplateTwo({ data }) {
  return (
    <div id="resume-preview" style={{ padding: '20px' }}>
      <h2>模板二 - 姓名: {data.name || '无数据'}</h2>
      {/* 其他内容... */}
    </div>
  )
}
