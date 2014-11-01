package org.nem.deploy;

import org.nem.core.deploy.*;
import org.nem.ncc.deploy.appconfig.NccAppConfig;
import org.nem.ncc.web.servlet.*;

import javax.servlet.http.HttpServlet;

/**
 * Class for supplying addition NCC configuration information.
 */
public class NccConfigurationPolicy implements NemConfigurationPolicy {

	@Override
	public Class getAppConfigClass() {
		return NccAppConfig.class;
	}

	@Override
	public Class getWebAppInitializerClass() {
		return NccWebAppInitializer.class;
	}

	@Override
	public Class<? extends HttpServlet> getJarFileServletClass() {
		return JarFileServlet.class;
	}

	@Override
	public Class<? extends HttpServlet> getDefaultServletClass() {
		return NccDefaultServlet.class;
	}

	@Override
	public CommonConfiguration loadConfig(final NemCommandLine commandLine) {
		return new CommonConfiguration(commandLine);
	}
}
