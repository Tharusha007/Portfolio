from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, KeepTogether
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pathlib import Path
out=Path(__file__).resolve().parents[1] / 'public/documents/Tharusha-Hanwella-Resume.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
fontb='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
pdfmetrics.registerFont(TTFont('Body',font)); pdfmetrics.registerFont(TTFont('BodyBold',fontb))
pdfmetrics.registerFontFamily('Body',normal='Body',bold='BodyBold')
ink=colors.HexColor('#183d3b'); muted=colors.HexColor('#526559'); gold=colors.HexColor('#a48244')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameX',fontName='BodyBold',fontSize=22,leading=27,textColor=ink,spaceAfter=9))
styles.add(ParagraphStyle(name='SubX',fontName='Body',fontSize=9,leading=14,textColor=muted,spaceAfter=9))
styles.add(ParagraphStyle(name='SectionX',fontName='BodyBold',fontSize=10,leading=15,textColor=ink,spaceBefore=17,spaceAfter=9))
styles.add(ParagraphStyle(name='HeadingX',fontName='BodyBold',fontSize=9.3,leading=14,textColor=ink,spaceAfter=4))
styles.add(ParagraphStyle(name='TextX',fontName='Body',fontSize=8.6,leading=13.2,textColor=muted,spaceAfter=6))
styles.add(ParagraphStyle(name='BulletX',parent=styles['TextX'],leftIndent=10,firstLineIndent=-8,spaceAfter=4))
story=[]
def p(text,style='TextX'): story.append(Paragraph(text,styles[style]))
def sec(text): p(text.upper(),'SectionX')
def bullet(text): p('• '+text,'BulletX')
p('THARUSHA PASAN HANWELLA','NameX')
p('Business Analyst | IT Professional | Information Systems Undergraduate','SubX')
p('<link href="mailto:tharushahanwella4@gmail.com">tharushahanwella4@gmail.com</link>  |  Sri Lanka<br/><link href="https://github.com/Tharusha007">github.com/Tharusha007</link><br/><link href="https://www.linkedin.com/in/tharusha-hanwella-3553422a0">linkedin.com/in/tharusha-hanwella-3553422a0</link>','SubX')
sec('Profile')
p('Information Systems undergraduate pursuing a BSc (Hons) in Information Technology for Business at NIBM, affiliated with Coventry University, UK. Practical experience as an Intern Business Analyst at Softwatch InfoSys, working with banking users and development teams on requirements, system testing, usability, and staff guidance.')
sec('Professional experience')
p('Intern Business Analyst - Softwatch InfoSys (Pvt) Ltd','HeadingX'); p('May 2026 - Present','SubX')
for t in ['Support banking software improvements and communicate between bank users and development teams.','Test banking systems to identify defects and assess correct functionality.','Analyse operational complaints and translate user issues into clear developer instructions.','Evaluate software usability and write straightforward guides for banking staff.']: bullet(t)
sec('Education')
for title,info in [
('BSc (Hons) in Information Technology for Business','Ongoing | NIBM, affiliated with Coventry University, UK'),
('Higher Diploma in Information Systems','Apr 2025 - Apr 2026 | NIBM<br/>Business Analysis, Agile &amp; DevOps, ERP, Data Warehousing, Data Management'),
('Diploma in System Design','Mar 2023 - Apr 2024 | NIBM<br/>Web technologies, IoT, SQL, analytical skills, Microsoft Office'),
('Certificate Course in Computer Science','Aug 2022 - Feb 2023 | NIBM<br/>C programming, HTML, Databases'),
('Secondary education - G.C.E. Ordinary Level','Jan 2014 - Nov 2022 | Wesley College, Colombo 09')]:
 story.append(KeepTogether([Paragraph(title,styles['HeadingX']),Paragraph(info,styles['TextX']),Spacer(1,5)]))
story.append(PageBreak())
p('THARUSHA PASAN HANWELLA','HeadingX'); p('Selected projects, skills and professional development','SubX')
sec('Selected academic projects')
for title,category,bullets,methods in [
('Flash Stock - Real-Time Auction Platform','Higher Diploma Final Project',['Conducted feasibility studies and requirements elicitation to define scope and functional requirements for a localised auction system.','Designed Use Case, Activity, and Class diagrams to explain business workflows and data structures.'],'Requirements elicitation, UML modeling, Draw.io, Figma, Agile methodology, business process mapping.'),
('Fake Job &amp; Internship Detection Platform','Agile Project',['Translated high-level requirements into actionable user stories with defined acceptance criteria.','Facilitated Sprint Planning, Daily Stand-ups, Sprint Reviews, and Retrospectives to support alignment and iterative delivery.'],'Scrum, user story mapping, backlog management, Agile ceremonies, Jira, CI/CD concepts.'),
('Home Gas Cylinder Delivery Mobile Application','Business Analysis Project',['Conducted SWOT and PESTLE analysis to identify operational inefficiencies and propose viable IT solutions.','Elicited, analysed, and documented functional and non-functional requirements for business stakeholders and the technical team.'],'Requirements engineering, SWOT/PESTLE, stakeholder analysis, Draw.io, MS Office.')]:
 p(title,'HeadingX'); p(category,'SubX')
 for t in bullets: bullet(t)
 p('<b>Methods and tools:</b> '+methods)
 story.append(Spacer(1,5))
sec('Skills & competencies')
for k,v in [
('Business analysis','Requirements elicitation, stakeholder communication, process mapping, user stories, acceptance criteria, Agile/Scrum, cross-functional teamwork, analytical problem-solving.'),
('System design','Use Case, Activity, Class, and ER diagrams; process/workflow diagrams; wireframing; Figma; Draw.io.'),
('Technical and data','SQL Server, MySQL, Power BI, Excel, business intelligence, data warehousing, statistics, Oracle APEX AI, C, C#, HTML, CSS.'),
]: p('<b>'+k+':</b> '+v)
sec('Professional development & community')
p('<b>Certification areas listed in the source CV:</b> Oracle APEX AI, Computer Science, Oracle Cloud &amp; Databases. Issue dates and credential IDs were not supplied.')
p('<b>Rotaract NIBM committee:</b> Active member, Aug 2025 - Present. Event organisation, community projects, and stakeholder communication.')
p('<b>Languages:</b> English and Sinhala.')
def footer(c,doc):
 c.setStrokeColor(colors.HexColor('#d7dbd3')); c.line(45,38,A4[0]-45,38)
 c.setFont('Body',7); c.setFillColor(muted); c.drawString(45,26,'Tharusha Pasan Hanwella | Resume'); c.drawRightString(A4[0]-45,26,str(doc.page))
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=45,leftMargin=45,topMargin=42,bottomMargin=49,title='Tharusha Pasan Hanwella - Resume',author='Tharusha Pasan Hanwella',subject='Resume-only portfolio copy')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(out)
