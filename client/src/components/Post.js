import React from 'react'
import '../stylesheets/post.css'


function Post() {
  return (
    <div className='post' >
      <img
      className='postimg'
      src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEVdQPIAAAD///9gQvpeQfVfQfdhQ/w8KZ1ZPehWNvNbPuxWO98bEkZPNs1RONNcPvNUMvNGMLYXDzs5J5QqHW9TOdlLM8M7KZoRCyxdRONnUuG9t+uup+VPLuhmT+daO/PMyOhNKPI/K6UNCSMIBRUvIHsoG2gUDjYdFE0zI4QjGFvy8vero+mVieTo5/Kgl+HKxelGHuyMfuva1/KajukFBA80JIkSDTAMCCElGWBEL7IKBhuViOvNx/aRFjYOAAAExklEQVR4nO3cb3OiSBAGcGBmEP+CGImuiSjJmcTsuuvemmTd3Pf/Wgd6GsTBHAPUDNTze5VKVbq6oWmGQaMZB89fx1pN2F8mx7IM7fDDt3nTlp1ZYWzn9iZR4ey2KTurYtnOdBWv8GZen/N34Puzjwq/z2WnUwZ7/eNQ4aSWBYac1b7C1Vp2JmWx7X2FU192JqVpvkcVThzZeZRovQorHNdvjH7wfxra33UdM3vzZ+1XzW71Cc5Em9a5ScM2fZedQdns2jxOpGrJTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgypjZslomKyCOZrUIowWkVChGA1fXdbeh5auRkv5jGGf0YuU/VoUi3Xt9b+OZOeKwtvtfHH2bJ07hyFb/kCM11ovFeVGoRObpcX0iGIcOT+IMlCmRWvqptuCYoHencTxVrkVzmaiwI3YSzadEnHtFBir19KS+yMGn7bM4A9F+L5bpnmX2KpKZeXUWRy88WRG0d56Y7mXvr7OrORKocCWSvziZLbKfRNbgxHFVGKeMk5hIe5kdXhzRsVwgbpOKtCmvSZVoU25zhVMwa2aciRwRaPeiEc4EDC2zXkBswI1zL/9CNF+5md1lPYdkwY2jy/8POvxBkz0zwh00uj6UPmr4AyL7EKRv/DgCd9ZicZZagsc+JY7QArBIqRX2UGFS5SrM2qVU1QoLmzTsjh9H+qTRSEqFmeMoe7cwH7iJjTLf8flrIwXu+CmZ/c66nkxZtb3JX7WxgJtZUSvvK/kr78QO4EE38+XT4sZR4OlJY/e8zLLPB/ORF0eBJ2CNJPcABZuL2+4d+ZdhykN+9ibl31lVaFJue7ki84G3paVAj4Zo9ywxoe14znZiQ4lTGJ7E5OP5o9jVQ14ScTJvFJSFJge9JdhcLLE+yvx8Uhp22qfCr4wSDyqB/Lv9EYkvSIRfH4aHKr58uFbhTnHEhocGu+vlOfLMOg7mvlIFhg3GtsuNvlluSb5rh5re4k94pw9yfuKhDCysjZL8edHoGBUQBwAAAAAAAKBk1Ixk+sYEZYzs/qq8rApEe5vRaPT6FPQskxB2uVC6q40N+4Nl+EcjtxKP9rH3GG+/nwaNdosSEpXKaCgqKiqL7X5H28PG9SL2GWNlNkgvYmdv5Dsd9yoIAq/bHVpWu9vtbYPgxe10zj6coMaLmE+lfOL0f1gqtAV8ERMssdOqRpNq0f4w973wJx61yhQYbV2ff0PhMwtaoQKjbV3eu+9LgmrcC2NM70+G+txhVYZMDGslX3heOIHVmTEnSDvls9sJV1oFT+AeNXu8L9Qk6mtX7gqMo2TY2Fwo76Fhqfed5owo07ppJ/LJ+2RhXhWUWL1gefophIdOo2vlfJuqFBo+S7S968bedVhcTc7eid1D0161li8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQKfL/p3vJ7LE2tWUnUSr/XfvVlJ1EqZyJNpvLTqJUzrNmjOvcpv5PQzMmjuw0SrRehRUaU192HqVpvhtRhau17ETKYvvGrkLjn7qWGPbovkLjey3nqb3+YRwqNG7m9Ruovj8zPio0Zrc1u/HbznRlxCs0jG/zZn3Oo+3c3hwKO1ZoPH8dy06sKPaXybEs4196Yje7GW1+GAAAAABJRU5ErkJggg=="
      alt =""
      />
      <div className='postinfo'>
         <div className="postcats">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
         </div>
         <hr/>
         <span className="posttitle">bot bro</span>
         <hr/>
         <span className="postdate">1 hour ago</span>
      </div>
      <p className='postdesc'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem 
      sodales, scelerisque purus ac, viverra metus. Ut accumsan nunc a est 
      faucibus luctus. Ut vel tincidunt mauris.
      </p>
    </div>
  )
}

export default Post