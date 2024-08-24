const skillData = {
	skillList: [
		{
			label: "Java",
			detail: [
			  "객체 지향 프로그래밍(OOP) 및 디자인 패턴에 대한 이해가 깊습니다.",
			  "Spring Framework 및 Spring Boot를 사용하여 웹 애플리케이션을 구축할 수 있습니다."
			],
			icon: "fab fa-java",
		  },
		  {
			label: "JavaScript",
			detail: [
			  "ES6 및 이후 문법을 사용하여 효율적인 웹 애플리케이션 개발이 가능합니다.",
			  "Vanilla JS 및 최신 프레임워크와 라이브러리를 잘 이해하고 있습니다."
			],
			icon: "fab fa-js-square",
		  },
		  {
			label: "HTML5 & CSS3",
			detail: [
			  "웹 페이지의 구조를 설계하고 스타일을 적용할 수 있습니다.",
			  "반응형 디자인 및 최신 CSS 문법을 활용하여 다양한 디바이스에서 최적화된 UI를 제공합니다."
			],
			icon: "fab fa-html5",
		  },
		  {
			label: "React",
			detail: [
			  "컴포넌트 기반 개발 및 상태 관리 라이브러리(예: Redux) 사용 경험이 있습니다.",
			  "함수형 컴포넌트 및 클래스 컴포넌트 모두를 사용하여 애플리케이션을 구축할 수 있습니다."
			],
			icon: "fab fa-react",
		  },
		  {
			label: "Spring Boot",
			detail: [
			  "RESTful API를 구축하고, 데이터베이스와의 연동 및 서비스 구조화 경험이 있습니다.",
			  "Spring Security 및 데이터 접근 기술을 활용하여 보안 및 데이터 처리를 관리할 수 있습니다."
			],
			icon: "fab fa-java",
		  },
		  {
			label: "jQuery",
			detail: [
			  "DOM 조작 및 이벤트 핸들링을 위한 다양한 기능을 사용할 수 있습니다.",
			  "AJAX를 통해 비동기 데이터 요청을 처리할 수 있습니다."
			],
			icon: "fab fa-jquery",
		  },
		  {
			label: "Git & GitHub",
			detail: [
			  "Git flow와 브랜치 전략을 이해하고 있으며, 협업을 위한 버전 관리가 가능합니다.",
			  "GitHub를 사용한 코드 리뷰 및 협업 경험이 있습니다."
			],
			icon: "fab fa-git-square",
		  },
		  {
			label: "AWS",
			detail: [
			  "AWS 서비스를 사용하여 클라우드 기반 애플리케이션을 배포하고 관리할 수 있습니다.",
			  "EC2, S3, RDS 등의 서비스를 활용한 경험이 있습니다."
			],
			icon: "fab fa-aws",
		  },
		  {
			label: "MySQL & MariaDB",
			detail: [
			  "관계형 데이터베이스 설계 및 SQL 쿼리 작성에 능숙합니다.",
			  "데이터베이스 성능 최적화 및 관리 경험이 있습니다."
			],
			icon: "fas fa-database",
		  },
		  {
			label: "DBeaver",
			detail: [
			  "다양한 데이터베이스 관리 시스템을 지원하는 DBeaver를 사용하여 데이터베이스를 관리할 수 있습니다.",
			  "쿼리 작성 및 데이터 시각화 기능을 활용할 수 있습니다."
			],
			icon: "fas fa-database",
		  },
		  {
			label: "Visual Studio Code",
			detail: [
			  "코드 편집 및 디버깅을 위한 기능을 활용하여 효율적인 개발 환경을 구축할 수 있습니다.",
			  "다양한 확장 기능을 사용하여 개발 생산성을 높일 수 있습니다."
			],
			icon: "fab fa-vscode",
		  },
		  {
			label: "Eclipse",
			detail: [
			  "Java 및 다른 언어의 개발을 지원하는 IDE를 사용하여 효율적인 개발 작업을 수행할 수 있습니다.",
			  "플러그인을 활용하여 IDE의 기능을 확장할 수 있습니다."
			],
			icon: "fas fa-cogs",
		  },
		  {
			label: "IntelliJ IDEA",
			detail: [
			  "Java 및 Kotlin을 포함한 다양한 언어의 개발을 지원합니다.",
			  "강력한 코드 분석 및 자동 완성 기능을 활용할 수 있습니다."
			],
			icon: "fab fa-intellij",
		  },
		
		
	],

	experienceList: [
		// {
		// 	period: "2018.11 - PRESENT",
		// 	position: "WEB DEVELOPER",
		// 	company: "CONER CREATIVE",
		// 	explain: "에이전시 회사인 코너크리에이티브에서 사이트 제작과 유지보수 운영을 담당하였습니다. 삼성, 기아, 캐논 등 대기업 솔루션 경험을 익히며 폭넓은 인터렉션 제작 능력을 키웠습니다. ",
		// },
		// {
		// 	period: "2018.09 - 2018.11",
		// 	position: "PUBLISHER",
		// 	company: "FIVESENSE SOFT",
		// 	explain: "웹 에이전시 오감소프트에서 퍼블리싱 작업을 담당하였습니다. 그누보드를 기반으로 개발된 솔루션을 활용하여 웹 사이트를 제작 및 유지운영을 하였습니다. 도메인 기관으로 고도몰을 사용하였고, 기본적인 php 문법을 숙지하였습니다. ",
		// },
		// {
		// 	period: "2017.09 - 2018.03",
		// 	position: "E-BOOK DEVELOPER",
		// 	company: "THE MOUM",
		// 	explain: "플래시로 제작되었던 E-BOOK을 HTML을 기반의 웹 페이지 전자교과서 제작을 하였습니다. 지학사, 천재교육, 동아 출판사의 검정교과서 5권을 제작하였습니다.",
		// },
	],

	educationList: [
		{
		  "period": "2024.08 - 2024.09",
		  "position": "Spring과 Vue.js 프로젝트 교육",
		  "company": "이노시스 컴퍼니",
		  "explain": [
			{ "tech": "AJAX",
				"description": [
				  "비동기 통신을 통해 웹 페이지의 동적 업데이트 구현",
				  "서버와의 비동기 통신을 통해 사용자 경험 개선",
				  "페이지 리로드 없이 데이터 전송 및 수신 처리",
			]},
			{ "tech": "Spring 프레임워크",
				"description": [
				  "IoC(제어의 역전)와 DI(의존성 주입) 개념을 이해하고 적용",
				  "AOP(관점 지향 프로그래밍)를 활용한 로깅, 트랜잭션 관리 등 기능 추가",
				  "Spring Boot를 사용한 빠르고 간편한 애플리케이션 설정 및 배포"

		  	]},
			{ "tech": "Vue.js",
				"description": [
				  "컴포넌트 기반의 UI 구성과 상태 관리",
				  "반응형 데이터 바인딩을 활용한 동적 사용자 인터페이스 개발",
				  "Vue Router를 이용한 SPA(Single Page Application) 내비게이션 구현",
				  "Vuex를 사용한 전역 상태 관리 및 데이터 흐름 관리",
			]},
			{ "tech": "프론트엔드와 백엔드 통합",
				"description": [
				  "RESTful API를 사용하여 프론트엔드와 백엔드 간의 데이터 통신 및 연동",
				  "인증 및 권한 관리를 통해 안전한 데이터 교환 및 사용자 세션 처리",
				  "프론트엔드와 백엔드 간의 에러 처리 및 예외 관리 통합"

		  	]}
		  ]
		},
		{
		  "period": "2023.06 - 204.01",
		  "position": "React와 SpringBoot를 활용한 풀스택 개발자 양성과정",
		  "company": "안양하이미디어 컴퓨터 학원",
		  "explain": [
			{ "tech": "JAVA", "description": [
			  "JDBC 개념 이해 및 데이터베이스와 연동",
			  "GUI와 AWT 활용",
			  "이벤트의 개념과 이벤트 처리 방식의 이해 및 활용 가능"
			]},
			{ "tech": "JSP", "description": [
			  "Java Bean을 활용, Set/Get 메소드를 이용해 DB와 연동하여 DB 입출력 가능",
			  "MVC Model1 / Model2 기반 개발"
			]},
			{ "tech": "JavaScript", "description": [
			  "ES5와 ES6의 문법 습득",
			  "jquery, bootstrap 등 각종 JavaScript 라이브러리 응용",
			  "웹에서 동작하는 각종 이벤트의 이해 및 관련 API 응용(Kakao MAP API, React, Node.js 등)",
			  "AJAX를 이용한 다양한 데이터 입출력"
			]},
			{ "tech": "Oracle 11g, MariaDB, MySQL", "description": [
			  "DB 설치 및 기본 SQL 작성",
			  "DB 모델링 기법 및 정규화",
			  "트랜젝션의 개념과 처리 방법과 PL/SQL 작성"
			]},
			{ "tech": "Tomcat 9.0", "description": "서버 구축 작업 및 사용 가능" },
			{ "tech": "AWS", "description": "아마존웹서비스를 통한 애플리케이션 웹프로젝트 환경 구현" },
			{ "tech": "IDE/ DB Tool", "description": [
			  "Eclipse STS를 이용한 자바 코드 작성",
			  "VScode를 활용한 프론트엔드 프로그래밍 환경 구축",
			  "draw.io를 이용한 UML 구조 작성",
			  "DBeaver, MySQL, HeidiSQL, SQLplus, SQL-developer 등의 다양한 데이터베이스 개발도구 사용"
			]},
			{ "tech": "myBATIS", "description": [
			  "MVC 패턴 및 myBATIS 연동 가능",
			  "XML을 통해 SQL statement에 매핑 가능"
			]},
			{ "tech": "Spring", "description": [
			  "어노테이션 기반 Controller 구현 가능",
			  "Spring MVC 패턴 이용 WebApp 제작 가능",
			  "SpringBoot와 JPA를 이용한 프로젝트 구현(Security, @Query 포함)",
			  "Restful을 이용하여 React와 SpringBoot 프로젝트 구현 가능 (axios 포함)"
			]}
		  ]
		}
	  ]
	  ,
};

export default skillData;
